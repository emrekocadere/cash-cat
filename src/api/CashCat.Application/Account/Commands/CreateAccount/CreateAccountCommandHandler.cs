using AutoMapper;
using CashCat.Application.Common.Services;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Account.Commands.CreateAccount;

public class CreateAccountCommandHandler(
    IRepository< Domain.Entities.Account> accountRepository,
    IMapper mapper,
    IUserContext userContext
    ):IRequestHandler<CreateAccountCommand, Result>
{
    public async Task<Result> Handle(CreateAccountCommand request, CancellationToken cancellationToken)
    {
        var account=mapper.Map<Domain.Entities.Account>(request);
        account.UserId = userContext.UserId;
        
      await accountRepository.Create(account);
      var affectedRows=await accountRepository.SaveChanges();
      
      if(affectedRows>0)
          return Result.Success();
      else
      {
            return Result.Failure(Errors.InsufficientFunds);
      }
        
    }
}