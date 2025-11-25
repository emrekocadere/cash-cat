using System.Security.Claims;
using CashCat.Application.Account.Commands.CreateAccount;
using CashCat.Application.Account.Queries.GetAccounts;
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
        return Ok(result);
    }
    
    [HttpGet]
    public async Task<ActionResult> GetAccounts()
    {
        var result = await mediator.Send(new GetAccountsQuery());
        return Ok(result);
    }
}