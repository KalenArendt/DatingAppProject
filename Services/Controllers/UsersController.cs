using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Services.Data;
using Services.Models;

namespace Services.Controllers;


[ApiController]
[Route("services/[controller]")]
public class UsersController(DataContext context) : ControllerBase
{
	[HttpGet] // /api/users
	public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
	{
		return await context.Users.ToListAsync();
	}

	[HttpGet("{id:int}")] // /api/users/3
	public async Task<ActionResult<AppUser>> GetUser(int id)
	{
		var user = await context.Users.FindAsync(id);
		
		if (user == null)
		{
			return NotFound();
		}

		return user;
	}
}
