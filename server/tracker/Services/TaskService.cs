using Tracker.Dtos;

namespace Tracker.Services
{
    public class TaskService : ITaskService
    {

        public Task<TaskDto> create(TaskDto taskDto)
        {
            throw new NotImplementedException();
        }

        public Task<List<TaskDto>> GetActiveTasks()
        {
            throw new NotImplementedException();
        }

        public Task<List<TaskDto>> GetTaskHistoy()
        {
            throw new NotImplementedException();
        }

        public Task<TaskDto> Update(TaskDto taskDto)
        {
            throw new NotImplementedException();
        }
    }
}
