import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/Model/studentModel';
import { Subjects } from 'src/app/Model/subjectModel';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student= new Student();
  subject: Subjects= new Subjects;
  subjectArray: any;
  studentList: any;
  teacherList: any;
  teacherId: any;
  isStudentSelected: boolean = false;
  techId: any;
  studentRow: any;
  studentId: number=0;  
  isSubjectAdded: boolean =false;

  @ViewChild('closebutton') closebutton:any;
  @ViewChild('updatebutton') updatebutton:any;
  @ViewChild('deletebutton') deletebutton:any;
  @ViewChild('closesubject') closesubject:any;
  
  

  constructor(private _service: ApiService) { }

  ngOnInit(): void {
    this.listStudent();
    this.listTeacher();
  }

  addStudent() {
     let studentValue:Student=new Student();
     studentValue=this.student.StudentFormGroup.value;

    this._service.postStudent(studentValue).subscribe(
      res => {
        this.listStudent();
        this.student.StudentFormGroup.reset();
        this.closebutton.nativeElement.click();
        alert("Student added Successfully");
        console.log(res);

      },
      err => {
        alert("Failed to add");
        console.log(err);
      }
    );
  }

  listStudent(){

    this._service.getStudent().subscribe(
      res=>{
      this.studentList=res;
      console.log(this.studentList);
      },
      err=>{
      console.log(err);
      }
      );
  }

  listTeacher() {
    this._service.getTeacher().subscribe(
    res=>{
    this.teacherList=res;
    console.log(this.teacherList);
    },
    err=>{
    console.log(err);
    }
    );
    }

    onTeacherChange(event:any) {
      this.teacherId= event.target.value;
    }

    selectedStudent(id:number){
      this.isStudentSelected=true;
      this.fetchStudentId(id);
      this._service.getStudentById(id).subscribe(
        res=>{
          this.studentRow=res;
          this.techId=res.Teacher.TeacherId;

          this.student.StudentFormGroup.controls['FirstName'].setValue(this.studentRow.FirstName);
          this.student.StudentFormGroup.controls['LastName'].setValue(this.studentRow.LastName);
          this.student.StudentFormGroup.controls['Address'].setValue(this.studentRow.Address);
          this.student.StudentFormGroup.controls['Contact'].setValue(this.studentRow.Contact);
          this.student.StudentFormGroup.controls['Age'].setValue(this.studentRow.Age);
          this.student.StudentFormGroup.controls['TeacherId'].setValue(this.techId);
          console.log(this.studentRow);
  
        },
        err=>{
          console.log(err);
        }
      );
    }

    editStudent(){
      let studentValue:Student=new Student;
      studentValue=this.student.StudentFormGroup.value;
      this._service.updateStudent(this.studentId, studentValue).subscribe(
  
        res=>{
               this.listStudent();
               this.updatebutton.nativeElement.click();
               alert("Updated Successfully")
        },
        err=>{
                console.log(err);
        }
      );
          
    }

    resetStudentForm(){
      this.student=new Student();
      this.student.StudentFormGroup.reset();
    }

    fetchStudentId(id:number){
      this.studentId=id;
    }

    removeStudent(){
      this._service.deleteStudent(this.studentId).subscribe(
        res=>{
              this.listStudent();
              this.deletebutton.nativeElement.click();
               alert("Deleted Successfully");

        },
        err=>{
          console.log(err);
          alert("Failed to delete");

        }
      );
    }

    addSubject(){

       this.subjectArray.SubjectList.push(this.subject.SubjectForm.value);
      this.subject.SubjectForm.reset();
      this.isSubjectAdded=true;     

    }

    onSubjectSubmit(){
      this.subjectArray.StudentId=this.studentId;
       console.log(this.subjectArray);
        this._service.postSubject(this.subjectArray).subscribe(
          res=>{
            this.closesubject.nativeElement.click();
            alert("Subject Added successfully")
            this.subject.SubjectForm.reset();


          },
          err=>{
              console.log(err);
          }
        )
       
    }

    onAddSubject(){
      this.subject.SubjectForm.reset();
    }

    fetchId(id:number){
      this.studentId=id;
    }
}

