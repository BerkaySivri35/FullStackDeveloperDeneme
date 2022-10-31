using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace UcakBilet.Core.Repositories
{
    /*
     * GenericRepository
     * IColleciton
     * IQueryable: Direkt db te gitmez. To list ve to listAsync ye gitsin istiyorsak kullanırız
     * List
     * Ne olduklarını ve farklarını araştır.
     */
    public interface IGenericRepository<T> where T : class
    {
        Task<T> GetByIdAsync(int id);
        IQueryable<T> GetAll(Expression<Func<T, bool>> expression);
        Task<T> AnyAsync(Expression<Func<T, bool>> expression);
        Task AddAsync(T entity);
        Task AddRangeAsync(IEnumerable<T> entities);
        void Update(T entity);
        void Remove(T entity);
        void RemoveRangeAsync(IEnumerable<T> entities);
    }
}
