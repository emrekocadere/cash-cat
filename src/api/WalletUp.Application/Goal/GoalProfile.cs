using AutoMapper;
using WalletUp.Application.Goal.Commands.AddTransactionToGoal;
using WalletUp.Application.Goal.Commands.CreateGoal;
using WalletUp.Application.Goal.Dtos;
using WalletUp.Domain.Entities;

namespace WalletUp.Application.Goal;

public class GoalProfile : Profile
{
    public GoalProfile()
    {
        CreateMap<CreateGoalCommand, WalletUp.Domain.Entities.Goal>();
        CreateMap<WalletUp.Domain.Entities.Goal, GoalDto>()
            .ForMember(dest => dest.Currency,
                opt => opt.MapFrom(src =>src.Currency));
        CreateMap<AddTransactionToGoalCommand,GoalTransaction>();
    }
}