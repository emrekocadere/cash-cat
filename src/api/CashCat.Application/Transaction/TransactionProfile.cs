using AutoMapper;
using CashCat.Application.Transaction.Commands.CreateTransaction;
using CashCat.Application.Transaction.Dtos;

namespace CashCat.Application.Transaction;

public class TransactionProfile : Profile
{
    public TransactionProfile()
    {
        CreateMap<CreateTransactionCommand, Domain.Entities.Transaction>();
        CreateMap< Domain.Entities.TransactionType,  TransactionTypeDto>();
        CreateMap<Domain.Entities.Category,CategoryDto>();
        CreateMap<Domain.Entities.Transaction,TransactionDto>();
        CreateMap<Domain.Entities.Currency,CurrencyDto>()
            .ForMember(dest => dest.Iso4217Code, opt => opt.MapFrom(src => src.ISO4217Code));
    }
}