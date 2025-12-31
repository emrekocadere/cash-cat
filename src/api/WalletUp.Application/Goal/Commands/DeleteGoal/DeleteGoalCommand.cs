using WalletUp.Domain.Common;
using MediatR;

namespace WalletUp.Application.Goal.Commands.DeleteGoal;

public record DeleteGoalCommand(Guid GoalId):IRequest<Result>;