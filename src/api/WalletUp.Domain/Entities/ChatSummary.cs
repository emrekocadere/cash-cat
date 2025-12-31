namespace WalletUp.Domain.Entities;

public class ChatSummary
{
    public Guid UserId { get; set; }
    public string SummaryText { get; set; } = "";
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    
}