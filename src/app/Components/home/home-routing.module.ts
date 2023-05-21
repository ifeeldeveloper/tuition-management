import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { TeacherComponent } from "../teacher/teacher.component";
import { StudentComponent } from "../student/student.component";


const routes: Routes = [

    {
        path: '', component: HomeComponent,
        children:
            [

                {
                    path: "", redirectTo: "#", pathMatch: "full"
                },
                {
                    path: "#", component: HomeComponent
                },
                {
                    path: "teacher", component:TeacherComponent
                },
                {
                    path: "student", component:StudentComponent
                }
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
