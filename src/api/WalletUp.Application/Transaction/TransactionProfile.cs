using AutoMapper;
using WalletUp.Application.Transaction.Commands.CreateTransaction;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction;

public class TransactionProfile : Profile
{
    public TransactionProfile()
    {
        CreateMap<CreateTransactionCommand, WalletUp.Domain.Entities.Transaction>();
        CreateMap<Domain.Entities.TransactionType, TransactionTypeDto>();
        CreateMap<Domain.Entities.Category, CategoryDto>();
        CreateMap<WalletUp.Domain.Entities.Transaction, TransactionDto>()
            .ForMember(dest => dest.TransactionType,
                opt => opt.MapFrom(src => src.TransactionType))
            .ForMember(dest => dest.Category,
                opt => opt.MapFrom(src => src.Category))
            .ForMember(dest => dest.Account,
                opt => opt.MapFrom(src => src.Account));
        
        CreateMap<WalletUp.Domain.Entities.Currency, CurrencyDto>()
            .ForMember(dest => dest.Iso4217Code, opt => opt.MapFrom(src => src.ISO4217Code));
    }
}