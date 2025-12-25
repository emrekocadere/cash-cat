using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Goal.Commands.CreateGoal;

public record CreateGoalCommand(
    string Title,
    string? Description,
    double Target
    ):IRequest<Result>;