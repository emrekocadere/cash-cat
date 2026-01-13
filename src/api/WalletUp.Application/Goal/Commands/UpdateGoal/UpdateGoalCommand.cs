using MediatR;
using WalletUp.Domain.Common;

namespace WalletUp.Application.Goal.Commands.UpdateGoal;

public record UpdateGoalCommand(
    Guid Id,
    string? Name,
    string? Description,
    double? Target
    ):IRequest<Result>;