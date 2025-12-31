using WalletUp.Domain.Common;
using MediatR;

namespace WalletUp.Application.Goal.Commands.AddTransactionToGoal;

public record AddTransactionToGoalCommand(
    Guid GoaldId,
    double Amount,
    Guid TransactionTypeId 
    ):IRequest<Result>;