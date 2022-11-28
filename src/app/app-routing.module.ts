import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './pages/artist/artist.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CategoryComponent } from './pages/category/category.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingleslistComponent } from './pages/singleslist/singleslist.component';

const routes: Routes = [
  //Ruta redirección a root
  {path:'', redirectTo: 'index', pathMatch: 'full'},
  //Rutas
  {path: 'index', component: HomeComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'playlist', component: PlaylistComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'singleslist', component: SingleslistComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
