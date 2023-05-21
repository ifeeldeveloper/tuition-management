import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Teacher{
    
    public FirstName:string="";
    public LastName:string="";
    public Address:string="";
    public Contact:string="";
    public Subjects:string="";
    public TeacherFormGroup:FormGroup;

    constructor(){
        let formBuilder:FormBuilder=new FormBuilder();
        this.TeacherFormGroup=formBuilder.group({
            FirstName:['',[Validators.required]],
            LastName:['',[Validators.required]],
            Address:['',[Validators.required]],
            Contact:['',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])],
            Subjects:['',[Validators.required]],         
            
        })
    }

}