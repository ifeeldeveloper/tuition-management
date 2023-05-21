import { Component, OnInit, ViewChild } from '@angular/core';
import { Teacher } from 'src/app/Model/teacherModel';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {  
  teacher:Teacher=new Teacher(); 
  teacherList: any;
  isTeacherSelected: boolean=false;
  teacherRow: any;
  doctorRow: any;
  teacherId: number=0;

  @ViewChild('closebutton') closebutton: any;
  @ViewChild('deletebutton') deletebutton: any;
  @ViewChild('updatebutton') updatebutton: any;

  

  constructor(private apiService:ApiService){

    console.log("Hello from Teacher component");
   
  }
  ngOnInit(): void {
    this.listTeacher();  
    
  }
 
  addTeacher(){
    let teacherValue:Teacher=new Teacher();
    teacherValue=this.teacher.TeacherFormGroup.value;

          // console.log(this.doctor)

    this.apiService.postTeacher(teacherValue).subscribe(
      res=>{
        alert("Teacher added successfully");
        console.log(res);
        this.listTeacher();
        this.closebutton.nativeElement.click();
      },
      err=>{
        alert("Failed to add ");   
      console.log(err);
     }
    );
  }

  listTeacher(){
    this.apiService.getTeacher().subscribe(
      res=>{
          this.teacherList=res;
          console.log(this.teacherList);
        

      },
      err=>{
        console.log(err);
      }
    );
  }

  selectedTeacher(id:number){
    this.isTeacherSelected=true;
    this.fetchTeacherId(id)
    this.apiService.getTeacherById(id).subscribe(
      res=>{
        this.teacherRow=res;
        this.teacher.TeacherFormGroup.controls['FirstName'].setValue(this.teacherRow.FirstName);
        this.teacher.TeacherFormGroup.controls['LastName'].setValue(this.teacherRow.LastName);
        this.teacher.TeacherFormGroup.controls['Address'].setValue(this.teacherRow.Address);
        this.teacher.TeacherFormGroup.controls['Contact'].setValue(this.teacherRow.Contact);
        this.teacher.TeacherFormGroup.controls['Subjects'].setValue(this.teacherRow.Subjects);
        console.log(res);

      },
      err=>{
        console.log(err);
      }
    );
  }

  editTeacher(){
       let teacherRowData:Teacher=new Teacher();
       teacherRowData=this.teacher.TeacherFormGroup.value;
    this.apiService.updateTeacher(this.teacherId, teacherRowData).subscribe(

      res=>{
             this.listTeacher();
             this.updatebutton.nativeElement.click();
             alert("Updated Successfully")
      },
      err=>{
              console.log(err);
              alert("Failed to Update");
      }
    );
        
  }

  fetchTeacherId(id:number){
      this.teacherId=id;
    }

    removeTeacher(){
      this.apiService.deleteTeacher(this.teacherId).subscribe(
        res=>{
              this.listTeacher();
              this.deletebutton.nativeElement.click();
               alert("Deleted Successfully");

        },
        err=>{
          console.log(err);

        }
      )
    }

    resetForm(){
        this.teacher.TeacherFormGroup.reset;
        // this.teacherRow=new Teacher;
      }
  

}


