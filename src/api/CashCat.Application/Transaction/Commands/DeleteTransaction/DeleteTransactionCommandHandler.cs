using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Commands.DeleteTransaction;

public class DeleteTransactionCommandHandler(
    IRepository<Domain.Entities.Transaction> transactionRepository)
    :IRequestHandler<DeleteTransactionCommand,Result>
{
    public Task<Result> Handle(DeleteTransactionCommand request, CancellationToken cancellationToken)
    {
        transactionRepository.Delete(request.TransactionId);
        transactionRepository.SaveChanges();
        return Task.FromResult(Result.Success());
    }
}