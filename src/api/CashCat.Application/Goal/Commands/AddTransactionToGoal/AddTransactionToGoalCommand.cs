using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Goal.Commands.AddTransactionToGoal;

public record AddTransactionToGoalCommand(
    Guid GoaldId,
    double Amount,
    Guid TransactionTypeId 
    ):IRequest<Result>;