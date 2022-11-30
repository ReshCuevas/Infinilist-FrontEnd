import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  userName: any
  userMail:any
  userSex: any
  //userImg: any

  constructor(private router: Router) { }

  ngOnInit(): void {
    let xhr = new XMLHttpRequest;
    var self = this;
		xhr.open('GET', environment.apiURL +'/api/perfil/' + localStorage.getItem('currentUser'));
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.send()
		xhr.onload = function(){
			let databoy = JSON.parse(xhr.response)
			self.userName = databoy.nombre + ' ' + databoy.apellido;
			self.userMail = databoy.correo;
			if(databoy.sexo == 'H'){
				self.userSex = "Hombre";
			}else{
				self.userSex = "Mujer";
			}
      //self.userImg =
    }
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['home'])
  }
}
