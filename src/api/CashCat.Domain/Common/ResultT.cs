namespace CashCat.Domain.Common;

public record ResultT<T>: Result
{
    public T? Value { get; }

    private ResultT(T value) : base(true, null) => Value = value;
    private ResultT(Error error) : base(false, error) { }

    public static implicit operator ResultT<T>(T value) => new(value);

    public static implicit operator ResultT<T>(Error error) => new(error);
}