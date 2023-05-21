using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TuitionServerr.Controllers.DAL;
using TuitionServerr.Controllers.DTO;
using TuitionServerr.Controllers.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TuitionServerr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly TuitionDbContext _context;
        public StudentController(TuitionDbContext context)
        {
            this._context = context;
        }
        // GET: api/<StudentController>
        [HttpGet]
        public IActionResult Get()
        {
            var studentList = _context.Students.Where(a => a.IsActive == true).Include(x => x.Teacher).ToList();
            return Ok(studentList);
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var student = _context.Students.Include(x => x.Teacher).Where(x => x.StudentId == id).FirstOrDefault();
            return Ok(student);
        }

        // POST api/<StudentController>
        [HttpPost]
        public void AddStudent([FromBody] StudentDTO studentDTO)
        {
            var Teacher = _context.Teachers.Where(x => x.TeacherId == studentDTO.TeacherId).FirstOrDefault();

            Student newStudent = new Student();
            newStudent.FirstName = studentDTO.FirstName;
            newStudent.LastName = studentDTO.LastName;
            newStudent.Address = studentDTO.Address;
            newStudent.Contact = studentDTO.Contact;
            newStudent.Age = studentDTO.Age;
            newStudent.Teacher = Teacher;
            newStudent.IsActive = true;

            _context.Add(newStudent);
            _context.SaveChanges();

        }

        // PUT api/<StudentController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] StudentDTO studentDTO)
        {
            var editStudent = _context.Students.Where(a => a.StudentId == id).FirstOrDefault();
            var Teacher = _context.Teachers.Where(x => x.TeacherId == studentDTO.TeacherId).FirstOrDefault();

            editStudent.FirstName = studentDTO.FirstName;
            editStudent.LastName = studentDTO.LastName;
            editStudent.Address = studentDTO.Address;
            editStudent.Contact = studentDTO.Contact;
            editStudent.Age = studentDTO.Age;
            editStudent.Teacher = Teacher;

            _context.SaveChanges();
            return Ok(editStudent);
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var deletestudent = _context.Students.Where(a => a.StudentId == id).FirstOrDefault();
            deletestudent.IsActive = false;
            _context.SaveChanges();
        }
    }
}
