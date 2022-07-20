namespace Tracker.Entites
{
    public class TodoItem
    {
        public Guid Id { get; set; }
        public string? TodoString { get; set; }

        public bool IsCompleted { get; set; }


    }
}