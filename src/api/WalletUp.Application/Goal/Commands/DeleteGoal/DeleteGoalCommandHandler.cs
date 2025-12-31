using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;

namespace WalletUp.Application.Goal.Commands.DeleteGoal;

public class DeleteGoalCommandHandler(
     IGoalRepository goalRepository)
    :IRequestHandler<DeleteGoalCommand,Result>
{
    public async Task<Result> Handle(DeleteGoalCommand request, CancellationToken cancellationToken)
    {
        goalRepository.Delete(request.GoalId);
        var affectedRows=await goalRepository.SaveChanges();
        if(affectedRows>0)
            return Result.Success();
        else
            return Result.Failure(Errors.AccountNotFound);

    }
}