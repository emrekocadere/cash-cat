using MediatR;
using WalletUp.Application.Identity.Dtos;
using WalletUp.Domain.Common;
using WalletUp.Domain.Services;

namespace WalletUp.Application.Identity.Commands.RefreshToken;

public class RefreshTokenCommandHandler(
     IIdentityService identityService)
    :IRequestHandler<RefreshTokenCommand,ResultT<TokenDto>>
{
    public async Task<ResultT<TokenDto>> Handle(RefreshTokenCommand request, CancellationToken cancellationToken)
    {
        var abcv=await identityService.Refresh(new TokenDto(){AccessToken = request.AccessToken, RefreshToken = request.RefreshToken});
        return abcv;
    }
}