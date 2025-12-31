using System;

namespace WalletUp.Application.Transaction.Dtos;

public class CategoryDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
}
