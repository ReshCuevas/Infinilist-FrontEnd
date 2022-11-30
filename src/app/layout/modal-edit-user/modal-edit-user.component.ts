import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.sass']
})
export class ModalEditUserComponent implements OnInit {

  editForm: FormGroup;

  constructor(private router: Router, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.editForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
      sexo:[''],
      img:[''],
      })
  }

  ngOnInit(): void {
  }

  open(content: any) {
		this.modalService.open(content);
	}

  editUser(){
    const datos = this.editForm.getRawValue();
		let xhr = new XMLHttpRequest;
		xhr.open('PUT', environment.apiURL +'/api/editar/'+ localStorage.getItem('currentUser'));
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.send(JSON.stringify(datos));
    this.modalService.dismissAll()
    this.router.navigate(['home'])
	}

}
