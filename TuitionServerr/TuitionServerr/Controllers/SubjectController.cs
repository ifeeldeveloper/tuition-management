using Microsoft.AspNetCore.Mvc;
using TuitionServerr.Controllers.DAL;
using TuitionServerr.Controllers.DTO;
using TuitionServerr.Controllers.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TuitionServerr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        private readonly TuitionDbContext _context;
        public SubjectController(TuitionDbContext context)
        {
            _context = context;
        }
        // GET: api/<SubjectController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SubjectController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SubjectController>
        [HttpPost]
        public IActionResult Post([FromBody] SubjectDTO subject)
        {
            var Student = _context.Students.FirstOrDefault(x => x.StudentId == subject.StudentId);
            foreach (var item in subject.SubjectList)
            {
                var newSubject = new Subject();
                newSubject.Subjects = item.Description;
                newSubject.Student = Student;
                _context.Add(newSubject);
                _context.SaveChanges();
            }

            return Ok();
        }

        // PUT api/<SubjectController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SubjectController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
