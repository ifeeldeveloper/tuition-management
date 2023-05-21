using Microsoft.EntityFrameworkCore;
using System.Numerics;
using TuitionServerr.Controllers.Model;

namespace TuitionServerr.Controllers.DAL
{
    public class TuitionDbContext : DbContext
    {
        public TuitionDbContext(DbContextOptions<TuitionDbContext> options) : base(options)
        {


        }             

        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Model.Subject> Subjects { get; set; }        

    }
}
