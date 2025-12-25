using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Goal.Commands.DeleteGoal;

public record DeleteGoalCommand(Guid GoalId):IRequest<Result>;