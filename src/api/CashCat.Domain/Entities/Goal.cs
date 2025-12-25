namespace CashCat.Domain.Entities;

public class Goal
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public required string Title { get; set; }
    public double Target { get; set; }
    public double TargetPercent { get; set; }
    public double CurrentAmount { get; set; }
    public string? Description { get; set; }
    public DateTimeOffset CreationTime { get; set; }=DateTimeOffset.UtcNow;
    

}