using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Goal.Queries.CreateGoal;

public record CreateGoalQuery(
    string Title,
    string? Description,
    double Amount,
    ICollection<Guid>AccountIds):IRequest<Result>;