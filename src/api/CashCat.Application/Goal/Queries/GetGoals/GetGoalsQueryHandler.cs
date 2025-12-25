using AutoMapper;
using CashCat.Application.Common.Services;
using CashCat.Application.Goal.Dtos;
using CashCat.Domain.Common;
using CashCat.Domain.Repositories;
using MediatR;

namespace CashCat.Application.Goal.Queries.GetGoals;

public class GetGoalsQueryHandler(
    IMapper mapper,
    IGoalRepository goalRepository,
    IUserContext userContext)
    :IRequestHandler<GetGoalsQuery, ResultT<ICollection<GoalDto>>>
{
    public Task<ResultT<ICollection<GoalDto>>> Handle(GetGoalsQuery request, CancellationToken cancellationToken)
    {
        var goals = goalRepository.GetAllGoalsByUserId(userContext.UserId);
        var goalDtos = mapper.Map<List<GoalDto>>(goals);
        return Task.FromResult<ResultT<ICollection<GoalDto>>>(goalDtos);
    }
}