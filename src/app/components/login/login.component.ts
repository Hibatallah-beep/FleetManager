import { Component ,inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected AuthService = inject(AuthService);

  email :string ='';
  role : 'COLLAB' | 'MANAGER' = 'COLLAB';

  
  onSubmit() :void{
    this.AuthService.login(this.role, this.email);
    this.email ='';
    this.role = 'COLLAB';
  }

}
