using CashCat.Application.Identity;
using CashCat.Application.Identity.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Auth.Commands.Register;

public class RegisterCommandHandler(IIdentityService identityService):IRequestHandler<RegisterCommand,ResultT<TokenDto>>
{
    public async Task<ResultT<TokenDto>> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var result= await identityService.Register(request);
        return result;
    }
}