using WalletUp.Domain.Common;
using MediatR;
using WalletUp.Application.Goal.Dtos;

namespace WalletUp.Application.Goal.Queries.GetGoals;

public record GetGoalsQuery():IRequest<ResultT<ICollection<GoalDto>>>;