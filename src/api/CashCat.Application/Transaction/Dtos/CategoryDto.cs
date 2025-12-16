using System;

namespace CashCat.Application.Transaction.Dtos;

public class CategoryDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
}
