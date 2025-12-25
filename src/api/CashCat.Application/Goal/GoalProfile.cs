using AutoMapper;
using CashCat.Application.Goal.Commands.AddTransactionToGoal;
using CashCat.Application.Goal.Commands.CreateGoal;
using CashCat.Application.Goal.Dtos;
using CashCat.Domain.Entities;

namespace CashCat.Application.Goal;

public class GoalProfile : Profile
{
    public GoalProfile()
    {
        CreateMap<CreateGoalCommand, Domain.Entities.Goal>();
        CreateMap<Domain.Entities.Goal, GoalDto>();
        CreateMap<AddTransactionToGoalCommand,GoalTransaction>();
    }
}