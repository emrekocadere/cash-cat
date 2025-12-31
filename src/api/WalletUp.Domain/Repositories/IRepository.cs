namespace WalletUp.Domain.Repositories;

public interface IRepository<T> where T : class
{
    Task Create(T entity);
    ICollection<T> GetAll();
    void Delete(T entity);
    void Delete(Guid id);
    Task Update(T entity);
    Task<T> GetByIdAsync(Guid id);
    Task<int> SaveChanges();
}