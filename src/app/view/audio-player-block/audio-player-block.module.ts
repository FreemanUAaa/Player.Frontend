import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerBlockComponent } from './blocks/audio-player-block/audio-player-block.component';
import { AudioPlayerUiComponent } from './ui/audio-player-ui/audio-player-ui.component';



@NgModule({
  declarations: [
    AudioPlayerBlockComponent,
    AudioPlayerUiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AudioPlayerBlockModule { }
