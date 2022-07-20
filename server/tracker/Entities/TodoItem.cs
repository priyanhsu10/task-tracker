using MongoDB.Bson.Serialization.Attributes;

namespace Tracker.Entites
{
    public class TodoItem
    {
        public Guid Id { get; set; }

        [BsonElement("todoString")]
        public string? TodoString { get; set; }
        [BsonElement("isCompleted")]
        public bool IsCompleted { get; set; }


    }
}