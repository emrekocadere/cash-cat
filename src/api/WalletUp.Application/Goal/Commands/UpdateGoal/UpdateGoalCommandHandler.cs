using MediatR;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;

namespace WalletUp.Application.Goal.Commands.UpdateGoal;

public class UpdateGoalCommandHandler(
    IGoalRepository goalRepository)
    :IRequestHandler<UpdateGoalCommand,Result>
{
    public async Task<Result> Handle(UpdateGoalCommand request, CancellationToken cancellationToken)
    {
        var goal=await goalRepository.GetByIdAsync(request.Id);
        if(request.Description!=null)
        {
            goal.Description=request.Description;
        }

        if (request.Name != null)
        {
            goal.Title=request.Name;
        }

        if (request.Target.HasValue)
        {
            goal.Target=request.Target.Value;
        }
        await goalRepository.SaveChanges();
        return Result.Success();
    }
}