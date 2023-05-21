using System.Numerics;

namespace TuitionServerr.Controllers.Model
{
    public class Student
    {
        public int StudentId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Address { get; set; }
        public string? Contact { get; set; }
        public int Age { get; set; }
        public Teacher? Teacher { get; set; }
        public bool IsActive { get; set; }
    }
}
