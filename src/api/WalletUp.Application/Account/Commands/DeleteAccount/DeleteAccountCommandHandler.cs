using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;

namespace WalletUp.Application.Account.Commands.DeleteAccount;

public class DeleteAccountCommandHandler(
    IAccountRepository accountRepository)
    :IRequestHandler<DeleteAccountCommand,Result>
{
    public async Task<Result> Handle(DeleteAccountCommand request, CancellationToken cancellationToken)
    {
         accountRepository.Delete(request.AccountId);
         var affectedRows = await  accountRepository.SaveChanges();
         
        return affectedRows > 0 ? Result.Success() : Result.Failure(Errors.AccountNotFound);
    }
}