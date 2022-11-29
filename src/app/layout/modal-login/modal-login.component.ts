import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faKey, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.sass']
})
export class ModalLoginComponent{
  closeResult = '';

  constructor(private modalService: NgbModal, library: FaIconLibrary) {
    library.addIcons(
      faKey,
      faUser
    )
  }

	open(content: any) {
		this.modalService.open(content);
	}
}
