using MediatR;
using WalletUp.Domain.Common;

namespace WalletUp.Application.Transaction.Commands.UpdateTransaction;

public record UpdateTransactionCommand(
    Guid TransactionId ,
    Guid? TransactionTypeId,
    string? Title,
    string? Description,
    double? Amount,
    DateTime? Date,
    Guid? CategoryId )
    :IRequest<Result>;