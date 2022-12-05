import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-new-list',
  templateUrl: './modal-new-list.component.html',
  styleUrls: ['./modal-new-list.component.sass']
})
export class ModalNewListComponent implements OnInit {

  newListForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private modalService: NgbModal,) {
    this.newListForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: [''],
      imagen: [''],
      elementos: [[]],
      user: [localStorage.getItem('currentUser')]
      })
   }
  open(content: any){
    this.modalService.open(content)
  }

  create(){
    const datos = this.newListForm.getRawValue();
    let xhr = new XMLHttpRequest;
    var self = this
    console.log(datos);
    xhr.open('POST', environment.apiURL + '/api/crearL');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(datos));
    xhr.onload = function(){
      if(xhr.status == 200){
        self.router.navigate(['playlist'])
        self.modalService.dismissAll()
      }
    }
  }

  // <div class="mix col-lg-3 col-md-4 col-sm-6 ${newLs.tipo}"><div class="playlist-item">
  // <a href="singleslist.html"><img src="${newLs.imagen}" alt=""></a>
  // <h5>${newLs.nombre}</h5>
  // </div></div>

  ngOnInit(): void {
  }

}
