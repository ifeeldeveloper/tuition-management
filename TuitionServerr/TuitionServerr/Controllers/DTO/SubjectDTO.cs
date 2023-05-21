namespace TuitionServerr.Controllers.DTO
{
    public class SubjectDTO
    {
        public List<SubjectList>? SubjectList { get; set; }

        public int StudentId { get; set; }
    }

    public class SubjectList
    {
        public int SubjectId { get; set; }
        public string? Description { get; set; }
    }
}
