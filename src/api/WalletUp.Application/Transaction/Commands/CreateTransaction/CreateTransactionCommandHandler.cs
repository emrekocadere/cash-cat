using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Common.Services;

namespace WalletUp.Application.Transaction.Commands.CreateTransaction;

public class CreateTransactionCommandHandler(
    IRepository<WalletUp.Domain.Entities.Transaction> transactionsRepository,
      IMapper mapper,
        IUserContext userContext)
     : IRequestHandler<CreateTransactionCommand, Result>
{
    private IRequestHandler<CreateTransactionCommand, Result> _requestHandlerImplementation;
    
    public async Task<Result> Handle(CreateTransactionCommand request, CancellationToken cancellationToken)
    {
        var transaction = mapper.Map<WalletUp.Domain.Entities.Transaction>(request);
        transaction.Date = transaction.Date.ToUniversalTime();
       await transactionsRepository.Create(transaction);
        await transactionsRepository.SaveChanges();
       return  Result.Success();
    }
}

