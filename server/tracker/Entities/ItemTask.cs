using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Tracker.Entites
{
    public class ItemTask : IEntity
    {
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        [BsonId]
        public Guid Id { get; set; }
        [BsonElement("title")]
        public string? Title { get; set; }
        [BsonElement("descrption")]
        public string? Description { get; set; }
        [BsonElement("status")]
        public STATUS Status { get; set; }
        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; }
        [BsonElement("taskTimeInMunites")]
        public int TaskTimeInMinutes { get; set; }
        [BsonElement("targetCompletionDate")]
        public DateTime TargetCompletionDate { get; set; }
        [BsonElement("todollist")]
        [BsonRepresentation(BsonType.Array)]
        public List<TodoItem> TodoList { get; set; } = new List<TodoItem>();

    }
}