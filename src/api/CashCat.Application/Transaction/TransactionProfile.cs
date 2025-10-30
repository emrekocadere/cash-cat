using AutoMapper;
using CashCat.Application.Transaction.Commands.CreateTransaction;

namespace CashCat.Application.Transaction;

public class TransactionProfile:Profile
{
    public TransactionProfile()
    {
        CreateMap<CreateTransactionCommand, Domain.Entities.Transaction>();
    }
}