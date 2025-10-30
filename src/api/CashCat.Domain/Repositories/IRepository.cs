namespace CashCat.Domain.Repositories;

public interface IRepository<T> where T : class
{
    Task Create(T entity);
    void Delete(T entity);
    Task Update(T entity);
    Task<T> GetByIdAsync(Guid id);
    Task<int> SaveChanges();
}