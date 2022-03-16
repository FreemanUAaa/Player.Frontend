import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerBlockComponent } from './blocks/audio-player-block/audio-player-block.component';
import { AudioPlayerUiComponent } from './ui/audio-player-ui/audio-player-ui.component';
import { StoreModule } from '@ngrx/store';
import { AudioTimeFormaterModule } from 'src/app/pipes/audio-time-formater/audio-time-formater.module';
import { SongListBlockComponent } from './blocks/song-list-block/song-list-block.component';
import { SongListUiComponent } from './ui/song-list-ui/song-list-ui.component';

@NgModule({
  declarations: [
    AudioPlayerBlockComponent,
    AudioPlayerUiComponent,
    SongListBlockComponent,
    SongListUiComponent,
  ],
  imports: [
    CommonModule,
    StoreModule,
    AudioTimeFormaterModule,
  ],
  exports: [
    AudioPlayerBlockComponent,
  ]
})
export class AudioPlayerBlockModule { }
