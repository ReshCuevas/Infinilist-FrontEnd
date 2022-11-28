import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faInstagram, faFacebook, faTwitter, faPinterest, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faInstagram,
      faFacebook,
      faTwitter,
      faPinterest,
      faYoutube,
      faHeart

    )
  }

  ngOnInit(): void {
  }

}
