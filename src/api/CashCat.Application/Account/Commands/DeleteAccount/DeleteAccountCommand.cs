using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Account.Commands.DeleteAccount;

public record DeleteAccountCommand(Guid AccountId):IRequest<Result>;