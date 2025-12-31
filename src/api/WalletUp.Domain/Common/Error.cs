namespace WalletUp.Domain.Common;

public record Error(string Id, string Description);

public static class Errors
{
    public static Error AccountNotFound { get; } = new("AccountNotFound", "Account not found.");
    public static Error InsufficientFunds { get; } = new("InsufficientFunds", "Insufficient balance.");
}