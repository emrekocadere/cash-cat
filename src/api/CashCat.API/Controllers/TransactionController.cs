using CashCat.Application.Transaction.Commands.CreateTransaction;
using CashCat.Domain.Common;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CashCat.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransactionController(IMediator mediator):ControllerBase
{
    [HttpPost]
    public async Task<ActionResult<Result>> CreateTransaction(CreateTransactionCommand command)
    {
       var result= await mediator.Send(command);
         if (result.IsSuccess)
         {
              return Ok(result);
         }
            return BadRequest(result);
    }
}