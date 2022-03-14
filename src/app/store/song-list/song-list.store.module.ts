import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { SongListNode, songListReducer } from './store/song-list.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SongListEffects } from './store/song-list.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(SongListNode, songListReducer),
    EffectsModule.forFeature([SongListEffects]),
  ]
})
export class SongListStoreModule { }
