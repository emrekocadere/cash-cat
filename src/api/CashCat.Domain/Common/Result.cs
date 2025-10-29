namespace CashCat.Domain.Common;

public record Result(bool IsSuccess, Error? Error)
{
public static Result Success() => new(true, null);
public static Result Failure(Error error) => new(false, error ?? throw new ArgumentNullException(nameof(error)));

public static implicit operator Result(Error error) => Failure(error);
}