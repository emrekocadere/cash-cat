using CashCat.Application.Goal.Commands.AddTransactionToGoal;
using CashCat.Application.Goal.Commands.CreateGoal;
using CashCat.Application.Goal.Commands.DeleteGoal;
using CashCat.Application.Goal.Dtos;
using CashCat.Application.Goal.Queries.GetGoals;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CashCat.API.Controllers;

[ApiController]
public class GoalController(IMediator mediator):ControllerBase
{
    [HttpPost("api/Goal")]
    public async  Task<ActionResult> CreateGoal(CreateGoalCommand command)
    {
        var result =await  mediator.Send(command);
        return Ok(result);
    }
    
    [HttpGet("api/Goal")]
    public async  Task<ActionResult> GetGoals()
    {
        var result =await  mediator.Send(new GetGoalsQuery());
        return Ok(result);
    }
    
    [HttpPost("api/Goal/{goalId}/Transaction")]
    public async  Task<ActionResult> AddTransactionToGoal(Guid goalId,AddGoalTransactionRequest request)
    {
        var command = new AddTransactionToGoalCommand(
            goalId,
            request.Amount,
            request.TransactionTypeId); 
        
        var result =await  mediator.Send(command);
        return Ok(result);
    }
    
    [HttpDelete("api/Goal/{goalId}")]
    public async  Task<ActionResult> AddTransactionToGoal(Guid goalId)
    {
        var command = new DeleteGoalCommand(goalId);
        var result =await  mediator.Send(command);
        return Ok(result);
    }

}