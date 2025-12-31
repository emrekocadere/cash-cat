using WalletUp.Application.Account.Dtos;

namespace WalletUp.Application.Goal.Dtos;

public class GoalDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; }
    public double Target { get; set; }
    public double TargetPercent { get; set; }
    public double CurrentAmount { get; set; }
    public DateTime CreationTime { get; set; }
}