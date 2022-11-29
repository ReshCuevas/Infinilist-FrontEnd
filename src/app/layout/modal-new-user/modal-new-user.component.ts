import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-new-user',
  templateUrl: './modal-new-user.component.html',
  styleUrls: ['./modal-new-user.component.sass']
})
export class ModalNewUserComponent implements OnInit {



  constructor(private modalService: NgbModal, ) {}

	open(content: any) {
		this.modalService.open(content);
	}

  create(){
    this.modalService.dismissAll()
  }

  ngOnInit(): void {
    
  }
}
