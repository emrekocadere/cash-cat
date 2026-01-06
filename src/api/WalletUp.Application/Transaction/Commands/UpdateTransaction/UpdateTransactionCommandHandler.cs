using MediatR;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;

namespace WalletUp.Application.Transaction.Commands.UpdateTransaction;

public class UpdateTransactionCommandHandler(
    ITransactionRepository _transactionRepository)
    :IRequestHandler<UpdateTransactionCommand,Result>
{
    public async Task<Result> Handle(UpdateTransactionCommand request, CancellationToken cancellationToken)
    {
        var transaction = await _transactionRepository.GetByIdAsync(request.TransactionId);
        if (request.Title != null)
        {
            transaction.Title = request.Title;
        }
        if(request.Description!= null)
        {
            transaction.Description = request.Description;
        }

        if (request.CategoryId != null)
        {
            transaction.CategoryId= request.CategoryId.Value;
        }
        
        if (request.Date != null)
        {
            transaction.Date= request.Date.Value;
        }

        
        if (request.TransactionTypeId != null)
        {
            transaction.TransactionTypeId= request.TransactionTypeId.Value;
        }

        

        await _transactionRepository.SaveChanges();
        return Result.Success();
    }
}