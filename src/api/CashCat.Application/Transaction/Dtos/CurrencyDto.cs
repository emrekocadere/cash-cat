using CashCat.Domain.Entities;

namespace CashCat.Application.Transaction.Dtos;

public class CurrencyDto
{
    public Guid Id { get; set; }
    public required string Iso4217Code { get; set; } 

}