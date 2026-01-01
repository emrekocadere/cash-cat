using MediatR;
using WalletUp.Domain.Common;

namespace WalletUp.Application.Identity.Commands.DeleteUser;

public record DeleteUserCommand:IRequest<Result>;