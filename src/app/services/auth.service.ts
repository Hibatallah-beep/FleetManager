import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient , private router : Router) {}
  Users : User[] = [];
  getUsers(){
    return this.http.get<User[]>('http://localhost:3000/user');
  }

  login(role : 'COLLAB' | 'MANAGER' , email : string){
    this.getUsers().subscribe({
      next : (data) => {
        this.Users = data;
        const user = this.Users.find(u=>u.role === role && u.email === email)
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));  
          localStorage.setItem('token', 'fake-token');  
          this.router.navigate(['/vehicles']);    
        }
        else{
          alert('Invalid credentials');
        }
        },
      error : (err) =>{
        console.log(err)
      }
    })
  }

  isAuthenticated() :boolean{
    return localStorage.getItem('token') !== null ;
  }

  getCurrentUser() : User {
    return JSON.parse(localStorage.getItem('user') || '{}') as User;
  }

  getRole(){
    return this.getCurrentUser().role;
  }

  logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
}
}
