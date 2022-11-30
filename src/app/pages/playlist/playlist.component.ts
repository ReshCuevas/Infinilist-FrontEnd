import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {

  listas:any =[]

  constructor(private router: Router) { }

  ngOnInit(): void {
    let xhr = new XMLHttpRequest;
    var self = this
    xhr.open('GET', environment.apiURL + '/api/getList/'+ localStorage.getItem('currentUser'));
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send();
    xhr.onload = function(){
      console.log(xhr.response)
      self.listas = JSON.parse(xhr.response)
    }
  }
  
  saveListId(listId: any){
    localStorage.setItem('listId', listId)
    this.router.navigate(['singleslist'])
  }
}
