using MediatR;
using Microsoft.AspNetCore.Mvc;
using WalletUp.Application.Preference.Commands.CreatePreference;
using WalletUp.Application.Preference.Commands.UpdatePreference;

namespace CashCat.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PreferenceController(IMediator mediator):ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> CreatePreference(CreatePreferenceCommand command)
    {
        var result=await mediator.Send(command);
        return Ok(result);
    }
    
    [HttpPatch]
    public async Task<IActionResult> UpdatePreference(UpdatePreferenceCommand command)
    {
        var result=await mediator.Send(command);
        return Ok(result);
    }
}
