using WalletUp.Domain.Entities;

namespace WalletUp.Application.Transaction.Dtos;

public class CurrencyDto
{
    public Guid Id { get; set; }
    public required string Iso4217Code { get; set; } 

}