using Tracker.Entites;

namespace Tracker.Repositories
{
    public interface IRepository { }
    public interface IRepository<T> : IRepository where T : IEntity
    {

        public IRepository<T> Build(string collectionName);
        Task<List<T>> GetAll(Func<T, bool> predicate);
        Task<List<T>> GetAll();
        Task<T> Create(T t);
        Task<T> Update(T t);

    }

}