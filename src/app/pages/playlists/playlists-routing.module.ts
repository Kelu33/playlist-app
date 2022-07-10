import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistsComponent } from './playlists.component';

const routes: Routes = [
  { path: '', component: PlaylistsComponent },
  { path: 'details', component: PlaylistDetailsComponent },
  { path: 'create', component: PlaylistCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
