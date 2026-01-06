namespace WalletUp.Application.Account.Dtos;

public class UpdateAccountRequest
{
    public string? Name { get; set; }
    public Guid? CurrencyId { get; set; }
    public Guid? AccountTypeId { get; set; }
}