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

    public ICollection<T> GetAll()
    {
        return _dbSet.ToList();
    }

    public void Delete(T entity)
    {
        _context.Remove(entity);
    }

    public void Delete(Guid id)
    {
        var entity = _dbSet.Find(id);
        if (entity != null)
        {
            _context.Remove(entity);
        }
    }

    public Task Update(T entity)
    {
        throw new NotImplementedException();
    }

    public async Task<T> GetByIdAsync(Guid id) // durdurmazsak ne olur
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task<int> SaveChanges()
    {
        return await _context.SaveChangesAsync();
    }
}