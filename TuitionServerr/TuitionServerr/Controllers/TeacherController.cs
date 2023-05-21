using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TuitionServerr.Controllers.DAL;
using TuitionServerr.Controllers.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TuitionServerr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TeacherController : ControllerBase
    {
        private readonly TuitionDbContext db;
        public TeacherController(TuitionDbContext _db)
        {
            this.db = _db;
        }

        // GET: api/<TeacherController>
        [HttpGet]
        public IActionResult GetTeachers()
        {
            List<Teacher> teacherlist = db.Teachers.Where(a => a.IsActive == true).ToList<Teacher>();
            return Ok(teacherlist);
        }

        // GET api/<TeacherController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var teacher = db.Teachers.Where(x => x.TeacherId == id).FirstOrDefault();
            return Ok(teacher);
        }

        // POST api/<TeacherController>
        [HttpPost]
        public void AddTeacher([FromBody] Teacher Teach)
        {


            Teacher newTeacher = new Teacher();
            newTeacher.FirstName = Teach.FirstName;
            newTeacher.LastName = Teach.LastName;
            newTeacher.Address = Teach.Address;
            newTeacher.Contact = Teach.Contact;
            newTeacher.Subjects = Teach.Subjects;
            db.Add(newTeacher);
            db.SaveChanges();

        }

        // PUT api/<TeacherController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Teacher teacher)
        {
            var editTeacher = db.Teachers.Where(a => a.TeacherId == id).FirstOrDefault();

            editTeacher.FirstName = teacher.FirstName;
            editTeacher.LastName = teacher.LastName;
            editTeacher.Address = teacher.Address;
            editTeacher.Contact = teacher.Contact;
            editTeacher.Subjects = teacher.Subjects;
            db.SaveChanges();
            return Ok(editTeacher);
        }

        // DELETE api/<TeacherController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var teacher = db.Teachers.Where(a => a.TeacherId == id).FirstOrDefault();
            teacher.IsActive = false;
            db.SaveChanges();
        }
    }
}
