using Microsoft.EntityFrameworkCore;
using Services.Models;

namespace Services.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
	public DbSet<AppUser> Users { get; set; }
}
