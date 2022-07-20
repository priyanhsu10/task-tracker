

using MongoDB.Driver;
using Tracker.Entites;

namespace Tracker.Repositories
{
    public class Repository<T> : IRepository<T> where T : IEntity
    {
        private IMongoCollection<T>? mongoCollection;
        private readonly IMongoClient mongoClient;

        public Repository(IMongoClient mongoClient)
        {
            this.mongoClient = mongoClient;
        }


        public async Task<T> Create(T t)
        {
            if (mongoCollection == null)
            {
                throw new Exception("invalid collection");
            }
            await mongoCollection.InsertOneAsync(t);
            return t;
        }

        public Task<List<T>> GetAll(Func<T, bool> predicate) => mongoCollection.Find(t => predicate(t)).ToListAsync();

        public Task<List<T>> GetAll() => mongoCollection.Find(x => true).ToListAsync();

        public async Task<T> Update(T t)
        {
            await mongoCollection.ReplaceOneAsync(x => x.Id == t.Id, t);
            return t;
        }

        public IRepository<T> Build(string collectionName)
        {
            if (this.mongoCollection != null)
            {
                return this;
            }
            this.mongoCollection = mongoClient.GetDatabase("tasktracker").GetCollection<T>(collectionName);
            return this;

        }
    }
}