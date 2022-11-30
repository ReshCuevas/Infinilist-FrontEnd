import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-new-user',
  templateUrl: './modal-new-user.component.html',
  styleUrls: ['./modal-new-user.component.sass']
})
export class ModalNewUserComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private router:Router, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
      sexo:[''],
      img:[''],
      })

  }

	open(content: any) {
		this.modalService.open(content);
	}

  create(){
    const datos = this.signupForm.getRawValue();
    if (this.signupForm.valid) {
      console.log('Estos son los datos a enviar: ', datos);
    }
	    let xhr = new XMLHttpRequest;
			xhr.open('POST', environment.apiURL +'/api/registro');
			xhr.setRequestHeader('Content-Type','application/json');
			xhr.send(JSON.stringify(datos));
			xhr.onload = function(){
				console.log(xhr.status);
				if(xhr.status == 201){
					console.log("Nuevo usuario creado con exito");
				}else{
					console.log("No se pudo crear el usuario");
				}
			}
    this.modalService.dismissAll()
    this.router.navigate(['home'])
  }

  ngOnInit(): void {
    
  }
}
