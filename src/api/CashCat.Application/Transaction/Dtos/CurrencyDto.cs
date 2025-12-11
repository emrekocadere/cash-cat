using CashCat.Domain.Entities;

namespace CashCat.Application.Transaction.Dtos;

public class CurrencyDto
{
    public Guid Id { get; set; }
    public required string ISO4217Code { get; set; } 

}