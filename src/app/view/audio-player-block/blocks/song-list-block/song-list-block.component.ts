import { Component, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeCurrentSong, playPause } from 'src/app/store/audio-player/store/audio-player.actions';
import { selectCurrnetSong, selectIsPlaying } from 'src/app/store/audio-player/store/audio-player.selectors';
import { Song } from 'src/app/store/song-list/store/song-list.interfaces';
import { selectSongs } from 'src/app/store/song-list/store/song-list.selectors';

@Component({
  selector: 'app-song-list-block',
  templateUrl: './song-list-block.component.html',
  styleUrls: ['./song-list-block.component.css']
})
export class SongListBlockComponent {

  @Output("close") closeEvent: EventEmitter<any> = new EventEmitter();

  songs$: Observable<Song[]> = this.store$.pipe(select(selectSongs));

  currentSong$: Observable<Song | null> = this.store$.pipe(select(selectCurrnetSong));

  isPlaying: boolean = false;

  constructor(private store$: Store) { 
    this.store$.pipe(select(selectIsPlaying)).subscribe(x => this.isPlaying = x);
  }

  close(): void {
    this.closeEvent.emit();
  }

  selectSong(data: { song: Song }): void {
    this.store$.dispatch(changeCurrentSong(data));

    if (!this.isPlaying) {
      this.store$.dispatch(playPause());
    }
  }
}
