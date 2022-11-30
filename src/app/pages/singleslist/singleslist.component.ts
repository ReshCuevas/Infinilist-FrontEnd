import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-singleslist',
  templateUrl: './singleslist.component.html',
  styleUrls: ['./singleslist.component.sass']
})
export class SingleslistComponent implements OnInit {

  lista: any = []

  constructor() { }

  ngOnInit(): void {
    let xhr = new XMLHttpRequest;
    		xhr.open('GET', environment.apiURL + '/api/getSingle/'+ localStorage.getItem('listId'));
    		xhr.setRequestHeader('Content-Type','application/json');
    		xhr.send();
        var self = this
    		xhr.onload = function(){
        		self.lista = JSON.parse(xhr.response);
        		console.log(self.lista);
    		}
  }
}