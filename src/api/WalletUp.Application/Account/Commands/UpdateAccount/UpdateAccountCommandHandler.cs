using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Common.Services;


namespace WalletUp.Application.Account.Commands.UpdateAccount;

public class UpdateAccountCommandHandler(
    IRepository<WalletUp.Domain.Entities.Account> accountRepository
) : IRequestHandler<UpdateAccountCommand, Result>
{
    public async Task<Result> Handle(UpdateAccountCommand request, CancellationToken cancellationToken)
    {
        var account = await accountRepository.GetByIdAsync(request.Id);
        if (request.AccountTypeId != null)
        {
            account.AccountTypeId = request.AccountTypeId.Value;
        }

        if (request.CurrencyId != null)
        {
            account.CurrencyId = request.CurrencyId.Value;
        }

        if (request.Name != null)
        {
            account.Name = request.Name;
        }

       await  accountRepository.SaveChanges();
       return Result.Success();
       
    }
}