using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Backend.Model;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRequestsController : ControllerBase
    {
        private readonly DataContext _context;

        public UserRequestsController(DataContext context)
        {
            _context = context;
        }

        // GET: UserRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserRequest>>> Get()
        {
            return await _context.userRequests.ToListAsync();
        }

        // GET: UserRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserRequest>> Get(string id)
        {
            var userRequest = await _context.userRequests.FirstOrDefaultAsync(x => x.Id == int.Parse(id));       
            if (userRequest == null)
            {
                return NotFound();
            }
            return new ObjectResult(userRequest);
        }

        // POST api/userrequests
        [HttpPost]
        public async Task<ActionResult<Result>> Post(UserRequest userRequest)
        {
            if (userRequest == null)
            {
                Result badResult = new Result(false, "Please attach User Request in the request body");
                return BadRequest(badResult);
            }
            string action;
            if (!_context.userRequests.Any(x => x.Id == userRequest.Id))
            {
                _context.userRequests.Add(userRequest);
                action = "created";
            } else
            {
                _context.Update(userRequest);
                action = "updated";
            }
            await _context.SaveChangesAsync();
            Result result = new Result(true, $"User Request with id={userRequest.Id} was successfully {action}");
            return Ok(result);
        }

        // PUT api/userrequests/
        [HttpPut]
        public async Task<ActionResult<Result>> Put( UserRequest userRequest)
        {
            if (userRequest == null)
            {
                Result badResult = new Result(false, "Please attach User Request in the request body");
                return BadRequest(badResult);
            }
            if (!_context.userRequests.Any(x => x.Id == userRequest.Id))
            {
                Result badResult = new Result(false, $"User Request with id={userRequest.Id} was not found");
                return NotFound(badResult);
            }

            _context.Update(userRequest);
            await _context.SaveChangesAsync();
            Result result = new Result(true, $"User Request with id={userRequest.Id} was successfully updated");
            return Ok(result);
        }

        // DELETE api/userrequests/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Result>> Delete(int id)
        {
            UserRequest userRequest = _context.userRequests.FirstOrDefault(x => x.Id == id);
            if (userRequest == null)
            {
                Result badResult = new Result(false, $"User Request with id={id} was not found");
                return NotFound(badResult);
            }
            _context.userRequests.Remove(userRequest);
            await _context.SaveChangesAsync();
            Result result = new Result(true, $"User Request with id={id} was successfully deleted");
            return Ok(result);
        }

    }
}
