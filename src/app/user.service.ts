import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users$$ = new BehaviorSubject<any[] | null>(null);

  users$ = this.users$$.asObservable();

  constructor(
    private http: HttpClient
  ) { }
  
  reloadUsers() {
    this.http.get<any[]>('api/users').subscribe(users => {
      this.users$$.next(users);
    });
    setTimeout(() => {
      if (!this.users$$.value) { return;}

      let newUsers = this.users$$.value;
      newUsers.push(newUsers[0]);

      this.users$$.next(newUsers);
    }, 5000);

  }
}
// export class UserService {
//   users$: any[] | null = null;

//   constructor(
//     private http: HttpClient
//   ) { 
//     this.reloadUsers()
//   }
  
//   reloadUsers() {
//     this.http.get<any[]>('api/users').subscribe(users => {
//       this.users$ = users;
//       console.log(this.users$);
//     });
    
//   }
// }