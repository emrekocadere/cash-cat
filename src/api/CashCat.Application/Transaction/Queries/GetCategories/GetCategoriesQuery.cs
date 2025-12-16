using CashCat.Application.Transaction.Dtos;
using CashCat.Domain.Common;
using MediatR;

namespace CashCat.Application.Transaction.Queries.GetCategories;

public record GetCategoriesQuery(): IRequest<ResultT<ICollection<CategoryDto>>>;