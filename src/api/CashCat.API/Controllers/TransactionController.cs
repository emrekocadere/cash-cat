using CashCat.Application.Transaction.Commands.CreateTransaction;
using CashCat.Application.Transaction.Commands.DeleteTransaction;
using CashCat.Application.Transaction.Queries.GetCategories;
using CashCat.Application.Transaction.Queries.GetCurrencies;
using CashCat.Application.Transaction.Queries.GetTransactions;
using CashCat.Application.Transaction.Queries.GetTransactionsByUser;
using CashCat.Application.Transaction.Queries.GetTransactionTypes;
using CashCat.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CashCat.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransactionController(IMediator mediator) : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult<Result>> CreateTransaction(CreateTransactionCommand command)
    {
        var result = await mediator.Send(command);
        if (result.IsSuccess)
        {
            return Ok(result);
        }

        return BadRequest(result);
    }

    [HttpGet("{accountId}")]
    public async Task<ActionResult<Result>> GetTransactions(Guid accountId)
    {
        var result = await mediator.Send(new GetTransactionsQuery(accountId));
        if (result.IsSuccess)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }
    
    [HttpDelete("{transactionId}")]
    public async Task<ActionResult<Result>> DeleteTransaction (Guid transactionId)
    {
        var result = await mediator.Send(new DeleteTransactionCommand(transactionId));
        if (result.IsSuccess)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }
    
    [HttpGet("Currencies")]
    public async Task<ActionResult<Result>> GetCurrencies()
    {
        var result = await mediator.Send(new GetCurrenciesQuery());
        if (result.IsSuccess)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }

    [HttpGet("categories")]
    public async Task<ActionResult<Result>> GetCategories()
    {
        var result = await mediator.Send(new GetCategoriesQuery());
        if (result.IsSuccess)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }
    
    [HttpGet("types")]
    public async Task<ActionResult<Result>> GetTransactionTypes()
    {
        var result = await mediator.Send(new GetTransactionTypesQuery());
        if (result.IsSuccess)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }
    [HttpGet]
    public async Task<ActionResult<Result>> GetAll()
    {
        var result = await mediator.Send(new GetTransactionsByUserQuery());
        if (result.IsSuccess)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }
}