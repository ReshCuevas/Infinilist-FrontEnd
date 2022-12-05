import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-delete-list',
  templateUrl: './modal-delete-list.component.html',
  styleUrls: ['./modal-delete-list.component.sass']
})
export class ModalDeleteListComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any){
    this.modalService.open(content)
  }

  deleteList(){
    let xhr = new XMLHttpRequest;
    var self = this
    xhr.open('DELETE', environment.apiURL + '/api/borrarL/'+ localStorage.getItem('listId'));
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send();
    xhr.onload = function(){
        if(xhr.status == 200){
            localStorage.removeItem('listId')
            self.modalService.dismissAll()
            console.log("Borrado exitoso");
            self.router.navigate(['playlist'])
        }
    }
  }

}
