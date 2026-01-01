using System.Security.Claims;
using AutoMapper;
using WalletUp.Application.Auth.Commands.Register;
using WalletUp.Application.Identity;
using WalletUp.Application.Identity.Commands.Login;
using WalletUp.Application.Identity.Dtos;
using WalletUp.Domain.Common;
using WalletUp.Domain.Services;
using WalletUp.Infstructre.Identity.Models;
using CashCat.Infstructre.Persistence.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.JsonWebTokens;

namespace CashCat.Infstructre.Identity;

public class IdentityService(
    IMapper mapper,
    RoleManager<ApplicationRole> roleManager,
    UserManager<ApplicationUser> userManager,
    SignInManager<ApplicationUser> signInManager,
    ITokenService tokenService,
    IUserTokenRepository userTokenRepository)
    : IIdentityService
{
    public async Task<ResultT<TokenDto>> Register(RegisterCommand command)
    {
        // var existingUser = await userManager.FindByNameAsync(command.Email);
        // if (existingUser != null)
        // {
        //     
        //
        //     
        //     
        // }
        // else
        // {

        if ((await roleManager.RoleExistsAsync("user")) == false)
        {
            var roleResult = await roleManager
                .CreateAsync(new ApplicationRole(){Name = "user"});
        
            if (roleResult.Succeeded == false)
            {
                var roleErros = roleResult.Errors.Select(e => e.Description);
            }
        }

        var user= mapper.Map<ApplicationUser>(command);
        
        user.UserName = user.Name + user.Surname;

        var identityResult = await userManager.CreateAsync(user, command.Password);
        
        var addUserToRoleResult = await userManager.AddToRoleAsync(user: user, role: "user");
        
        List<Claim> authClaims = [
            new (ClaimTypes.Name, user.UserName),
            new(ClaimTypes.NameIdentifier,user.Id.ToString()),
            new (ClaimTypes.Role, "user"),
            new (JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
    
        ];
        var refreshToken = tokenService.GenerateRefreshToken();
        var accessToken=tokenService.GenerateAccessToken(authClaims);

        var userToken = new ApplicationUserToken
        {
            UserId = user.Id,
            LoginProvider = "Journify",
            Name = "RefreshToken",
            Value = refreshToken,
            ExpiresAt = DateTime.UtcNow.AddDays(7)
        };
        
        await userTokenRepository.Create(userToken);

        await userTokenRepository.SaveChanges();
        var tokenDto = new TokenDto()
        {
           RefreshToken = refreshToken,
              AccessToken = accessToken
        };
        return tokenDto;

    }

    public async Task<ResultT<TokenDto>> Login(LoginCommand command)
    {
        var user = await  userManager.FindByEmailAsync(command.Email);
        
       var result= await signInManager.PasswordSignInAsync(user, command.Password, false, false);
       
       if (result.Succeeded == false)
       {
           return Errors.AccountNotFound;
       }
       
        List<Claim> authClaims = [
            new (ClaimTypes.Name, user.UserName),
            new(ClaimTypes.NameIdentifier,user.Id.ToString())
            // new (JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()), // bu nedir
        
        ];
        
        var userRoles = await userManager.GetRolesAsync(user);
        
        foreach (var userRole in userRoles)
        {
            authClaims.Add(new Claim(ClaimTypes.Role, userRole));
        }
        
        // generating access token
        var accessToken = tokenService.GenerateAccessToken(authClaims);

        // refresh token
        string refreshToken = tokenService.GenerateRefreshToken();

        var tokenInfo= userTokenRepository.GetByUserId(user.Id);

  
        tokenInfo.ExpiresAt = DateTime.UtcNow.AddDays(7);
        tokenInfo.Value = refreshToken;
        
        
        await userTokenRepository.SaveChanges();
        
        var tokenDto = new TokenDto
        {
            AccessToken = accessToken,
            RefreshToken = refreshToken
        };

        return tokenDto;
    }
    
    public async  Task<ResultT<TokenDto>> Refresh(TokenDto tokenModel)
    {
            
        var principal = tokenService.GetPrincipalFromExpiredToken(tokenModel.AccessToken);
        var username = principal.Identity.Name;
        var user= await userManager.FindByNameAsync(username);
        var tokenInfo = userTokenRepository.GetByUserId(user.Id);
        if (tokenInfo == null
            || tokenInfo.Value != tokenModel.RefreshToken
            || tokenInfo.ExpiresAt <= DateTime.UtcNow)
        {
            return Errors.AccountNotFound;
        }
        
        var newAccessToken = tokenService.GenerateAccessToken(principal.Claims);
        var newRefreshToken = tokenService.GenerateRefreshToken();
        
        tokenInfo.Value = newRefreshToken; // rotating the refresh token
       await userTokenRepository.SaveChanges();
        var tokenDto = new TokenDto
        {
            AccessToken = newAccessToken,
            RefreshToken = newRefreshToken
        };
        return tokenDto;
        
    }

    public async Task<Result> DeleteUser(Guid userId)
    {
         var user= await userManager.FindByIdAsync(userId.ToString());
        var result = await userManager.DeleteAsync(user);
        if(result.Succeeded)
            return Result.Success();
        else
        {
            return Result.Failure(Errors.AccountNotFound);
        }
        
    }
}