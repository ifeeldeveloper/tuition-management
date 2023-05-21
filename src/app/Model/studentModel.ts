import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export  class Student{
    
    public FirstName:string="";     
    public LastName:string="";     
    public Address:string="";     
    public Contact:string="";     
    public Age:number=0;     
    public TeacherId:number=0;
    public StudentFormGroup:FormGroup;

    constructor(){

        let formBuilder:FormBuilder=new FormBuilder();
        this.StudentFormGroup=formBuilder.group({
            FirstName:['',[Validators.required]],
            LastName:['',[Validators.required]],
            Address:['',[Validators.required]],
            Contact:['',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])],
            Age:['',Validators.required],
            TeacherId:['',Validators.required]
        });
    }

} 