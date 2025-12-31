using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Common.Services;

namespace WalletUp.Application.Goal.Commands.CreateGoal;

public class CreateGoalCommandHandler(IMapper mapper,
     IRepository<WalletUp.Domain.Entities.Goal> goalRepository,
     IUserContext userContext)
    :IRequestHandler<CreateGoalCommand,Result>
{
    public Task<Result> Handle(CreateGoalCommand request, CancellationToken cancellationToken)
    {
        var goal=mapper.Map<WalletUp.Domain.Entities.Goal>(request);
        goal.UserId = userContext.UserId;
        goalRepository.Create(goal);
        goalRepository.SaveChanges();
        return Task.FromResult(Result.Success());
    }
}