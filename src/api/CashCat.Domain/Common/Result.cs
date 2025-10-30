namespace CashCat.Domain.Common;

public record Result(bool IsSuccess, Error? Error)
{
    public static Result Success()
    {
        return new Result(true, null);
    }

    public static Result Failure(Error error)
    {
        return new Result(false, error ?? throw new ArgumentNullException(nameof(error)));
    }

    public static implicit operator Result(Error error)
    {
        return Failure(error);
    }
}