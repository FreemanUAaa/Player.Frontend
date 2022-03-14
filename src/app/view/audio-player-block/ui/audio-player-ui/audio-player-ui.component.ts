import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getAudioUrl, getCoverUrl } from 'src/app/server-urls';
import { Song } from 'src/app/store/song-list/store/song-list.interfaces';

@Component({
  selector: 'app-audio-player-ui',
  templateUrl: './audio-player-ui.component.html',
  styleUrls: ['./audio-player-ui.component.css']
})
export class AudioPlayerUiComponent {

  @Input() currentSong: Song | null = null;

  @Input() currentTime: number = 0;

  @Input() isPlaying: boolean = false;

  @Output("playPause") playPauseEvent: EventEmitter<any> = new EventEmitter();

  @Output("moveNext") moveNextEvent: EventEmitter<any> = new EventEmitter();
  
  @Output("movePrev") movePrevEvent: EventEmitter<any> = new EventEmitter();

  playPause(): void {

  }

  moveNext(): void {

  }

  movePrev(): void {

  }

  getCover(): string {
    return getCoverUrl(this.currentSong?.id ?? "");
  }

  getAudio(): string {
    return getAudioUrl(this.currentSong?.id ?? "");
  }
}
