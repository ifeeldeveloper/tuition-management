namespace TuitionServerr.Controllers.DTO
{
    public class TeacherDTO
    {
        public int TeacherId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Contact { get; set; }
        public string Subjects { get; set; }
        public bool IsActive { get; set; }
    }
}
