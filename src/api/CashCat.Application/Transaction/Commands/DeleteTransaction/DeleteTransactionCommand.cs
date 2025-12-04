using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Commands.DeleteTransaction;

public record DeleteTransactionCommand(Guid TransactionId):IRequest<Result>;