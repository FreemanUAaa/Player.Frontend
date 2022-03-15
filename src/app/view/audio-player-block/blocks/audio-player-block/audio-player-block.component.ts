import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeRepeatListType, playPause } from 'src/app/store/audio-player/store/audio-player.actions';
import { RepeatListType } from 'src/app/store/audio-player/store/audio-player.interfaces';
import { selectIsPlaying, selectRepeatListType } from 'src/app/store/audio-player/store/audio-player.selectors';
import { Song } from 'src/app/store/song-list/store/song-list.interfaces';

@Component({
  selector: 'app-audio-player-block',
  templateUrl: './audio-player-block.component.html',
  styleUrls: ['./audio-player-block.component.css']
})
export class AudioPlayerBlockComponent {

  song = { id: "d", name: "Stefania", author: "Kalush", duration: 179 };

  isPlaying$: Observable<boolean> = this.store$.pipe(select(selectIsPlaying));

  repeatListType: RepeatListType = RepeatListType.playlistLooped;

  constructor(private store$: Store) { 
    store$.pipe(select(selectRepeatListType)).subscribe(x => this.repeatListType = x);
  }

  playPause(): void {
    this.store$.dispatch(playPause());
  }

  changeRepeatListType(): void {
    this.store$.dispatch(changeRepeatListType({ repeatType: this.getNextRepeatListType() }))
  }

  getNextRepeatListType(): RepeatListType {
    switch (this.repeatListType) {
      case RepeatListType.playlistLooped: return RepeatListType.songLooped;
      case RepeatListType.songLooped: return RepeatListType.playbackShuffled;
      case RepeatListType.playbackShuffled: return RepeatListType.playlistLooped;
    }
  }
}
