using Tracker.Entites;

namespace Tracker.Dtos
{
    public class TaskDto
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }

        public string? Description { get; set; }

        public STATUS Status { get; set; }
        public DateTime CreatedAt { get; set; }

        public int TaskTimeInMunutes { get; set; }

        public DateTime TargetCompletionDate { get; set; }
        public List<TodoItemDto> TodoList { get; set; } = new List<TodoItemDto>();

    }
}