import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistCreateComponent } from './playlist-create/playlist-create.component';


@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistDetailsComponent,
    PlaylistCreateComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
