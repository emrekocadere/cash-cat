using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Identity.Dtos;

namespace WalletUp.Application.Identity.Commands.Login;

public class LoginCommandHandler(
    IIdentityService identityService)
    :IRequestHandler<LoginCommand, ResultT<TokenDto>>
{
    public async Task<ResultT<TokenDto>> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        var result=await identityService.Login(request);
        return result;
    }
}