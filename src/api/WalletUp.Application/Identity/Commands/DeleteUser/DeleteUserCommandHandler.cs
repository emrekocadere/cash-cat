using MediatR;
using WalletUp.Application.Common.Services;
using WalletUp.Domain.Common;

namespace WalletUp.Application.Identity.Commands.DeleteUser;

public class DeleteUserCommandHandler(
    IIdentityService identityService,
    IUserContext userContext)
    :IRequestHandler<DeleteUserCommand,Result>
{
    public async Task<Result> Handle(DeleteUserCommand request, CancellationToken cancellationToken)
    {
        var result = await identityService.DeleteUser(userContext.UserId);
            return result;
    }
}