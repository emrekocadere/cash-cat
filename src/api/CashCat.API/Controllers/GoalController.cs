using CashCat.Application.Goal.Queries.CreateGoal;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CashCat.API.Controllers;

[ApiController]
public class GoalController(IMediator mediator):ControllerBase
{
    [HttpPost("api/Goal")]
    public async  Task<ActionResult> CreateGoal(CreateGoalQuery query)
    {
        var result =await  mediator.Send(query);
        return Ok(result);
    }
    
}