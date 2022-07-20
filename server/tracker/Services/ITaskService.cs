using Tracker.Dtos;

namespace Tracker.Services
{
    public interface ITaskService
    {

        Task<List<TaskDto>> GetActiveTasks();
        Task<List<TaskDto>> GetTaskHistoy();
        Task<TaskDto> create(TaskDto taskDto);
        Task<TaskDto> Update(TaskDto taskDto);
    }
}
