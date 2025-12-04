using AutoMapper;
using CashCat.Application.Transaction.Commands.CreateTransaction;
using CashCat.Application.Transaction.Dtos;

namespace CashCat.Application.Transaction;

public class TransactionProfile : Profile
{
    public TransactionProfile()
    {
        CreateMap<CreateTransactionCommand, Domain.Entities.Transaction>();
        CreateMap<Domain.Entities.Transaction,TransactionDto>();
    }
}