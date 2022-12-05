import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { LoadingInterceptor } from './loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArtistComponent } from './pages/artist/artist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoryComponent } from './pages/category/category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingleslistComponent } from './pages/singleslist/singleslist.component';
import { ModalLoginComponent } from './layout/modal-login/modal-login.component';
import { ModalNewUserComponent } from './layout/modal-new-user/modal-new-user.component';
import { ModalNewListComponent } from './layout/modal-new-list/modal-new-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditUserComponent } from './layout/modal-edit-user/modal-edit-user.component';
import { ModalDeleteListComponent } from './layout/modal-delete-list/modal-delete-list.component';
import { ModalAddToListComponent } from './layout/modal-add-to-list/modal-add-to-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoaderComponent,
    ArtistComponent,
    BlogComponent,
    CategoryComponent,
    ContactComponent,
    PlaylistComponent,
    ProfileComponent,
    SingleslistComponent,
    ModalLoginComponent,
    ModalNewUserComponent,
    ModalNewListComponent,
    ModalEditUserComponent,
    ModalDeleteListComponent,
    ModalAddToListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
