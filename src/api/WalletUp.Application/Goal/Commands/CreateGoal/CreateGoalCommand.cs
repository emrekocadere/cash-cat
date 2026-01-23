using WalletUp.Domain.Common;
using MediatR;

namespace WalletUp.Application.Goal.Commands.CreateGoal;

public record CreateGoalCommand(
    string Title,
    string? Description,
    double Target,
    Guid CurrencyId
    ):IRequest<Result>;