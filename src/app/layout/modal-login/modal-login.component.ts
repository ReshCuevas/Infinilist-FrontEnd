import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faKey, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as socketIo from 'socket.io-client';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.sass']
})
export class ModalLoginComponent implements OnInit {

  socketClient: any;


  constructor(private modalService: NgbModal, library: FaIconLibrary) {
    library.addIcons(
      faKey,
      faUser
    )
  }

  ngOnInit(): void {
    this.socketClient = socketIo.io('http://localhost:3000/')
  }

	open(content: any) {
		this.modalService.open(content);
	}

  login(){
    this.socketClient.emit('login',{ id: 'usuario Demo'})
    this.modalService.dismissAll()
    console.log('hola');
  }
}
