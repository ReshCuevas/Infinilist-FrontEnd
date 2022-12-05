import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-add-to-list',
  templateUrl: './modal-add-to-list.component.html',
  styleUrls: ['./modal-add-to-list.component.sass']
})
export class ModalAddToListComponent implements OnInit {
  addItemForm: FormGroup

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) {
    this.addItemForm = this.formBuilder.group({
      elementos: ['', Validators.required],
      })
  }

  ngOnInit(): void {
  }

  open(content: any){
    this.modalService.open(content)
  }

  add(){
    let xhr = new XMLHttpRequest;
    const datos = {elementos: this.addItemForm.getRawValue().elementos};
    console.log(typeof datos);
    xhr.open('PUT', environment.apiURL + '/api/elementos/' + localStorage.getItem('listId'));
    xhr.setRequestHeader('Content-Type','application/json');
    console.log(JSON.stringify(datos));
    xhr.send(JSON.stringify(datos));

    this.modalService.dismissAll()
  }

}
