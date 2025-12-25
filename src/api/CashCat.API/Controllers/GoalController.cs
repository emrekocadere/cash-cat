using CashCat.Application.Goal.Commands.CreateGoal;
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
    
}