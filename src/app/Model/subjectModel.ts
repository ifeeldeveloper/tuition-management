import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Subject{
    public SubjectList:Subjects []=[];
    public StudentId:number=0;
}

export class Subjects {
    public Description:string="";
    public SubjectForm:FormGroup;

constructor(){
    let formBuilder=new FormBuilder();
    this.SubjectForm= formBuilder.group({
        Description:['',[Validators.required]]
    });
}
}