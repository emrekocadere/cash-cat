using AutoMapper;

namespace CashCat.Application.Goal;

public class GoalProfile:Profile
{
    public GoalProfile()
    {
        CreateMap<Queries.CreateGoal.CreateGoalQuery,Domain.Entities.Goal>();
    }
}