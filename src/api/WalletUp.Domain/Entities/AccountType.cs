namespace WalletUp.Domain.Entities;

public class AccountType
{
    public Guid Id { get; set; }
    public required string Name { get; set; }

    public ICollection<Account>? Accounts { get; set; }
}