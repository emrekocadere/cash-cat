using AutoMapper;
using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetCurrencies;

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