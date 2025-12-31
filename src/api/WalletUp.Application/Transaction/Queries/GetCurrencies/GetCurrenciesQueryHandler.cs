using AutoMapper;
using WalletUp.Domain.Common;
using WalletUp.Domain.Entities;
using WalletUp.Domain.Repositories;
using MediatR;
using WalletUp.Application.Transaction.Dtos;

namespace WalletUp.Application.Transaction.Queries.GetCurrencies;

public class GetCurrenciesQueryHandler(
    IMapper mapper,
    IRepository<Currency> currencyRepository)
    : IRequestHandler<GetCurrenciesQuery,ResultT<ICollection<CurrencyDto>>>
{
    public Task<ResultT<ICollection<CurrencyDto>>> Handle(GetCurrenciesQuery request, CancellationToken cancellationToken)
    {
       var currencies= currencyRepository.GetAll();
        var currencyDtos=mapper.Map<List<CurrencyDto>>(currencies);
        return Task.FromResult<ResultT<ICollection<CurrencyDto>>>(currencyDtos);
    }
}