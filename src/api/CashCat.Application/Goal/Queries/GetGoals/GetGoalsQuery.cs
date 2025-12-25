using CashCat.Application.Goal.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Goal.Queries.GetGoals;

public record GetGoalsQuery():IRequest<ResultT<ICollection<GoalDto>>>;