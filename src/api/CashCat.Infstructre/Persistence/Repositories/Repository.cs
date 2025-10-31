using CashCat.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace CashCat.Infstructre.Persistence.Repositories;

public class Repository<T> : IRepository<T> where T : class
{
    private readonly CashCatDbContext _context;
    protected readonly DbSet<T> _dbSet;

    public Repository(CashCatDbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public async Task Create(T entity)
    {
        await _context.AddAsync(entity);
    }

    public void Delete(T entity)
    {
        _context.Remove(entity);
    }

    public Task Update(T entity)
    {
        throw new NotImplementedException();
    }

    public Task<T> GetByIdAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task<int> SaveChanges()
    {
        return await _context.SaveChangesAsync();
    }
}