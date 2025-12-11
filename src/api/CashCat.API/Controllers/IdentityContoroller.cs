using CashCat.Application.Auth.Commands.Register;
using CashCat.Application.Identity.Commands.Login;
using CashCat.Application.Identity.Dtos;
using CashCat.Domain.Common;
using CashCat.Infstructre.Identity;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CashCat.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IdentityController(IMediator mediator) : ControllerBase
{
    [HttpPost("register")]
    public async Task<ActionResult<ResultT<TokenDto>>> Register(RegisterCommand command)
    {
        var result = await mediator.Send(command);
        return result;
    }

    [HttpPost("login")]
    public async Task<ActionResult<ResultT<TokenDto>>> Login(LoginCommand command)
    {

        var result = await mediator.Send(command);
        
        Response.Cookies.Append("refreshToken", result.Value.RefreshToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = false,
            SameSite = SameSiteMode.Lax,
            Expires = DateTime.UtcNow.AddDays(7),
            Path = "/"
        });

        return result;
    }
}