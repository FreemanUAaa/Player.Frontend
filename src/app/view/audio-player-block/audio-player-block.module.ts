import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerBlockComponent } from './blocks/audio-player-block/audio-player-block.component';
import { AudioPlayerUiComponent } from './ui/audio-player-ui/audio-player-ui.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AudioPlayerBlockComponent,
    AudioPlayerUiComponent
  ],
  imports: [
    CommonModule,
    StoreModule,
  ],
  exports: [
    AudioPlayerBlockComponent,
  ]
})
export class AudioPlayerBlockModule { }
