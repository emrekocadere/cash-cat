namespace WalletUp.Application.Goal.Dtos;

public class UpdateGoalRequest
{
    public required string? Name { get; set; }
    public double? Target { get; set; }
    public string? Description { get; set; }
}