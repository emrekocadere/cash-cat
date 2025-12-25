using AutoMapper;
using CashCat.Application.Common.Services;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Goal.Commands.CreateGoal;

public class CreateGoalCommandHandler(IMapper mapper,
     IRepository<Domain.Entities.Goal> goalRepository,
     IUserContext userContext)
    :IRequestHandler<CreateGoalCommand,Result>
{
    public Task<Result> Handle(CreateGoalCommand request, CancellationToken cancellationToken)
    {
        var goal=mapper.Map<Domain.Entities.Goal>(request);
        goal.UserId = userContext.UserId;
        goalRepository.Create(goal);
        goalRepository.SaveChanges();
        return Task.FromResult(Result.Success());
    }
}