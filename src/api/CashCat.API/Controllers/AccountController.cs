using System.Security.Claims;
using CashCat.Application.Account.Commands.CreateAccount;
using CashCat.Application.Account.Commands.DeleteAccount;
using CashCat.Application.Account.Queries.GetAccount;
using CashCat.Application.Account.Queries.GetAccounts;
using CashCat.Application.Account.Queries.GetAccountTypes;
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
    
    [HttpGet("{accountId}")]
    public async Task<ActionResult> GetAccount(Guid accountId)
    {
        var result = await mediator.Send(new GetAccountQuery(accountId));
        return Ok(result);
    }
    
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAccounts(Guid id)
    {
        var result = await mediator.Send(new DeleteAccountCommand(id));
        return Ok(result);
    }
    
    [HttpGet("AccountTypes")]
    public async Task<ActionResult> GetAccountTypes()
    {
        var result = await mediator.Send(new GetAccountTypesQuery());
        return Ok(result);
    }
    

}