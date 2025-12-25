using AutoMapper;
using CashCat.Application.Goal.Commands.CreateGoal;
using CashCat.Application.Goal.Dtos;

namespace CashCat.Application.Goal;

public class GoalProfile : Profile
{
    public GoalProfile()
    {
        CreateMap<CreateGoalCommand, Domain.Entities.Goal>();
        CreateMap<Domain.Entities.Goal, GoalDto>();
    }
}