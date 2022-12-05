import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as socketIo from 'socket.io-client';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.sass']
})
export class ModalLoginComponent implements OnInit {

  socketClient: any;
  loginForm: FormGroup;


  constructor(private router: Router, private modalService: NgbModal, library: FaIconLibrary, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      })
  
    library.addIcons(
      faKey,
      faUser
    )
  }

  ngOnInit(): void {
    this.socketClient = socketIo.io(environment.apiURL)
  }

	open(content: any) {
		this.modalService.open(content);
	}

  login(){
    const datos = this.loginForm.getRawValue();
    if (this.loginForm.valid) {
      console.log('Estos son los datos a enviar: ', datos);
    }
    let xhr = new XMLHttpRequest;
    xhr.open('POST', environment.apiURL + '/api/login');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(datos));
    xhr.onload = function(){
      if(xhr.status == 200 ){
        localStorage.setItem("currentUser",xhr.response)
      }else{
        console.log("Error de autenticación");
      }
    }
    this.socketClient.emit('login', localStorage.getItem('currentUser'))
    this.modalService.dismissAll()
    this.router.navigate(['home'])
  }


}
