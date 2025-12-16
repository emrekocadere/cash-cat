using AutoMapper;
using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Entities;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetCategories;

public class GetCategoriesQueryHandler(
    IMapper mapper,
    IRepository<Category> categoryRepository)
    :IRequestHandler<GetCategoriesQuery, ResultT<ICollection<CategoryDto>>>
{
    public Task<ResultT<ICollection<CategoryDto>>> Handle(GetCategoriesQuery request, CancellationToken cancellationToken)
    {
        var categories = categoryRepository.GetAll();
        var categoryDtos = mapper.Map<List<CategoryDto>>(categories);
        return Task.FromResult<ResultT<ICollection<CategoryDto>>>(categoryDtos);
    }
}
