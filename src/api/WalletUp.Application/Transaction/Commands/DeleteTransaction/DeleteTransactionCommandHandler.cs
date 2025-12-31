using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;

namespace WalletUp.Application.Transaction.Commands.DeleteTransaction;

public class DeleteTransactionCommandHandler(
    IRepository<WalletUp.Domain.Entities.Transaction> transactionRepository)
    :IRequestHandler<DeleteTransactionCommand,Result>
{
    public Task<Result> Handle(DeleteTransactionCommand request, CancellationToken cancellationToken)
    {
        transactionRepository.Delete(request.TransactionId);
        transactionRepository.SaveChanges();
        return Task.FromResult(Result.Success());
    }
}