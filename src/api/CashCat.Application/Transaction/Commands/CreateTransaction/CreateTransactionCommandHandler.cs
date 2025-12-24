using AutoMapper;
using CashCat.Application.Common.Services;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Commands.CreateTransaction;

public class CreateTransactionCommandHandler(
    IRepository<Domain.Entities.Transaction> transactionsRepository,
      IMapper mapper,
        IUserContext userContext)
     : IRequestHandler<CreateTransactionCommand, Result>
{
    private IRequestHandler<CreateTransactionCommand, Result> _requestHandlerImplementation;
    
    public async Task<Result> Handle(CreateTransactionCommand request, CancellationToken cancellationToken)
    {
        var transaction = mapper.Map<Domain.Entities.Transaction>(request);
        transaction.Date = transaction.Date.ToUniversalTime();
       await transactionsRepository.Create(transaction);
        await transactionsRepository.SaveChanges();
       return  Result.Success();
    }
}

