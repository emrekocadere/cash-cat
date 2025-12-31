using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Identity;
using WalletUp.Application.Identity.Dtos;

namespace WalletUp.Application.Auth.Commands.Register;

public class RegisterCommandHandler(IIdentityService identityService):IRequestHandler<RegisterCommand,ResultT<TokenDto>>
{
    public async Task<ResultT<TokenDto>> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var result= await identityService.Register(request);
        return result;
    }
}