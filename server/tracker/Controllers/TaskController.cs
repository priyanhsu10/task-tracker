using Microsoft.AspNetCore.Mvc;
using Tracker.Dtos;
using Tracker.Services;

namespace Tracker.Controllers

{
    [ApiController]
    [Route("api/task")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService taskService;

        public TaskController(ITaskService taskService)
        {
            this.taskService = taskService;
        }

        [HttpGet()]
        public async Task<ActionResult<List<TaskDto>>> GetTasks()
        {
            var result = await taskService.GetActiveTasks();

            return Ok(result);
        }

        [HttpGet("/getHistory")]
        public async Task<ActionResult<List<TaskDto>>> GetHistory()
        {
            var result = await taskService.GetTaskHistoy();
            return Ok(Enumerable.Empty<TaskDto>());
        }
        [HttpPost]
        public async Task<ActionResult<TaskDto>> create([FromBody] TaskDto taskDto)
        {

            var result = await taskService.create(taskDto);
            return Ok(result);
        }

        [HttpPut("{id:Guid}")]
        public async Task<ActionResult<TaskDto>> update(Guid id, [FromBody] TaskDto taskDto)
        {
            var result = await taskService.Update(taskDto);
            return Ok(result);
        }
    }
}