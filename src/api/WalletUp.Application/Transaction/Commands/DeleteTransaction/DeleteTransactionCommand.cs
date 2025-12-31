using WalletUp.Domain.Common;
using MediatR;

namespace WalletUp.Application.Transaction.Commands.DeleteTransaction;

public record DeleteTransactionCommand(Guid TransactionId):IRequest<Result>;