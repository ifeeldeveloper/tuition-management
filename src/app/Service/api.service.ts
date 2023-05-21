import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../Model/teacherModel';
import { Observable } from 'rxjs';
import { LogIn } from '../Model/logInModel';
import { Student } from '../Model/studentModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  postTeacher(teacherparam: Teacher): Observable<any> {
    return this._http.post("https://localhost:7006/api/Teacher", teacherparam, { responseType: 'json' });
  }

  getTeacher(): Observable<any> {
    return this._http.get("https://localhost:7006/api/Teacher", { responseType: 'json' });
  }

  getTeacherById(id: number): Observable<any> {
    return this._http.get("https://localhost:7006/api/Teacher/" + id, { responseType: 'json' });
  }

  updateTeacher(id: number, teacher: Teacher): Observable<any> {
    return this._http.put("https://localhost:7006/api/Teacher/" + id, teacher, { responseType: 'json' })
  }

  deleteTeacher(id: number): Observable<any> {
    return this._http.delete("https://localhost:7006/api/Teacher/" + id, { responseType: 'json' })
  }

  postLogIn(credential: LogIn): Observable<any> {
    return this._http.post("https://localhost:7006/api/Authentication", credential, { responseType: 'json' });
  }

  postStudent(student: Student): Observable < any > {
    return this._http.post("https://localhost:7006/api/Student", student, { responseType: 'json' });
  }

  getStudent(): Observable < any > {
    return this._http.get("https://localhost:7006/api/Student",{ responseType: 'json' });
  }

  getStudentById(id: number): Observable<any> {
    return this._http.get("https://localhost:7006/api/Student/" + id, { responseType: 'json' });
  }

  updateStudent(id: number, student: Student): Observable<any> {
    return this._http.put("https://localhost:7006/api/Student/" + id, student, { responseType: 'json' })
  }

  deleteStudent(id: number): Observable<any> {
    return this._http.delete("https://localhost:7006/api/Student/" + id, { responseType: 'json' })
  }

  postSubject(subject: any): Observable<any>{
    return this._http.post("https://localhost:7006/api/Subject",subject,{responseType:'json'});
  }
}
