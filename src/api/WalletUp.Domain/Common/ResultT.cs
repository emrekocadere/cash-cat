namespace WalletUp.Domain.Common;

public record ResultT<T> : Result
{
    private ResultT(T value) : base(true, null)
    {
        Value = value;
    }

    private ResultT(Error error) : base(false, error)
    {
    }

    public T? Value { get; }

    public static implicit operator ResultT<T>(T value)
    {
        return new ResultT<T>(value);
    }

    public static implicit operator ResultT<T>(Error error)
    {
        return new ResultT<T>(error);
    }
}