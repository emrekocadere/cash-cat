using AutoMapper;
using CashCat.Domain.Common;
using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Goal.Commands.AddTransactionToGoal;

public class AddTransactionToGoalCommandHandler(
    IMapper mapper,
    IRepository<Domain.Entities.GoalTransaction> goalTransactionRepository)
    :IRequestHandler<AddTransactionToGoalCommand,Result>
{
    public async Task<Result> Handle(AddTransactionToGoalCommand request, CancellationToken cancellationToken)
    {

        var transaction=mapper.Map<GoalTransaction>(request);
        await goalTransactionRepository.Create(transaction);
       var affecredRows= await goalTransactionRepository.SaveChanges();
       if(affecredRows>0)
           return Result.Success();
       else
       {
           return Result.Failure(Errors.AccountNotFound);
       }


    }
}