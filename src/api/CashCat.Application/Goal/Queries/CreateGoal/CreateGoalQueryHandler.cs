using AutoMapper;
using CashCat.Application.Common.Services;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Goal.Queries.CreateGoal;

public class CreateGoalQueryHandler(IMapper mapper,
     IRepository<Domain.Entities.Goal> goalRepository,
     IAccountRepository accountRepository,
     IUserContext userContext)
    :IRequestHandler<CreateGoalQuery,Result>
{
    public Task<Result> Handle(CreateGoalQuery request, CancellationToken cancellationToken)
    {
        var goal=mapper.Map<Domain.Entities.Goal>(request);
        var accounts = accountRepository.GetByIdsAsync(request.AccountIds);
        goal.UserId = userContext.UserId;
        goal .Accounts = accounts;
        goalRepository.Create(goal);
        goalRepository.SaveChanges();
        return Task.FromResult(Result.Success());
    }
}