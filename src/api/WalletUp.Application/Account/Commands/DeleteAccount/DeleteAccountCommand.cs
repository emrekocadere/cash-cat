using WalletUp.Domain.Common;
using MediatR;

namespace WalletUp.Application.Account.Commands.DeleteAccount;

public record DeleteAccountCommand(Guid AccountId):IRequest<Result>;