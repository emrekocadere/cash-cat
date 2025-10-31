using System.Security.Claims;
using CashCat.Application.Account.Commands.CreateAccount;
using CashCat.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CashCat.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController(IMediator mediator):ControllerBase
{

    [HttpPost]
    public async Task<ActionResult> CreateAccount(CreateAccountCommand command)
    {
       var result = await mediator.Send(command);
        //var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
        return Ok(result);
    }
}