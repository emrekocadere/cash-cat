using System.Security.Claims;
using AutoMapper;
using CashCat.Application.Auth.Commands.Register;
using CashCat.Application.Identity;
using CashCat.Application.Identity.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using CashCat.Domain.Services;
using CashCat.Infstructre.Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.JsonWebTokens;

namespace CashCat.Infstructre.Identity;

public class IdentityService(
    IMapper mapper,
    RoleManager<ApplicationRole> roleManager,
    UserManager<ApplicationUser> userManager,
    SignInManager<ApplicationUser> signInManager,
    ITokenService tokenService,
    IRepository<ApplicationUserToken> userTokenRepository)
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
        
        user.UserName = "name";

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
}