using CashCat.Application.Identity.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Identity.Commands.Login;

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