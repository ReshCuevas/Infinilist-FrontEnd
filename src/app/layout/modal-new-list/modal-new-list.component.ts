import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-new-list',
  templateUrl: './modal-new-list.component.html',
  styleUrls: ['./modal-new-list.component.sass']
})
export class ModalNewListComponent implements OnInit {

  constructor(private modalService: NgbModal,) { }

  open(content: any){
    this.modalService.open(content)
  }

  create(){
    this.modalService.dismissAll()
  }

  ngOnInit(): void {
  }

}
