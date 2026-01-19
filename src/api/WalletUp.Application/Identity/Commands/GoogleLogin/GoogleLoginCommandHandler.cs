using MediatR;
using WalletUp.Application.Identity.Dtos;
using WalletUp.Domain.Common;

namespace WalletUp.Application.Identity.Commands.GoogleLogin;

public class GoogleLoginCommandHandler(IIdentityService identityService) : IRequestHandler<GoogleLoginCommand, ResultT<TokenDto>>
{
    public async Task<ResultT<TokenDto>> Handle(GoogleLoginCommand request, CancellationToken cancellationToken)
    {
        return await identityService.GoogleLogin(request);
    }
}
