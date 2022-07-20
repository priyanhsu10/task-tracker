namespace Tracker.Entites
{
    public class Task
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }

        public string? Description { get; set; }

        public STATUS Status { get; set; }
        public DateTime CreatedAt { get; set; }

        public int TaskTimeInMunutes { get; set; }

        public DateTime TargetCompletionDate { get; set; }
        public List<TodoItem> TodoList { get; set; } = new List<TodoItem>();

    }
}