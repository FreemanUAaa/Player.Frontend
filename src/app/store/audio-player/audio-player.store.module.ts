import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AudioPlayerNode, audioPlayerReduce } from './store/audio-player.reducers';
import { AudioPlayerEffects } from './store/audio-player.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(AudioPlayerNode, audioPlayerReduce),
    EffectsModule.forFeature([AudioPlayerEffects]),
  ]
})
export class AudioPlayerStoreMudule { }
