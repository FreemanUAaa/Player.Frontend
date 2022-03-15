import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { getAudioUrl, getCoverUrl } from 'src/app/server-urls';
import { RepeatListType } from 'src/app/store/audio-player/store/audio-player.interfaces';
import { Song } from 'src/app/store/song-list/store/song-list.interfaces';

@Component({
  selector: 'app-audio-player-ui',
  templateUrl: './audio-player-ui.component.html',
  styleUrls: ['./audio-player-ui.component.css']
})
export class AudioPlayerUiComponent {

  @ViewChild('player') playerRef: ElementRef<HTMLAudioElement> | null = null;

  @Output("playPause") playPauseEvent: EventEmitter<any> = new EventEmitter();

  @Output("moveNext") moveNextEvent: EventEmitter<any> = new EventEmitter();
  
  @Output("movePrev") movePrevEvent: EventEmitter<any> = new EventEmitter();

  @Output("changeRepeatListType") changeRepeatListTypeEvent: EventEmitter<any> = new EventEmitter();
  
  @Output("changeCurrentTime") changeCurrentTimeEvent: EventEmitter<{ time: number }> = new EventEmitter<{ time: number }>();

  @Input() repeatListType: RepeatListType = RepeatListType.playlistLooped;

  @Input() currentSong: Song | null = null;

  @Input() isPlaying: boolean = false;

  currentTime: number = 0;

  playPause(): void {
    if (this.isPlaying) {
      this.playerRef?.nativeElement.pause()
    }
    else {
      this.playerRef?.nativeElement.play()
    }

    this.playPauseEvent.emit();
  }

  moveNext(): void {
    this.moveNextEvent.emit();
  }

  movePrev(): void {
    this.movePrevEvent.emit();
  }

  changeRepeatListType(): void {
    this.changeRepeatListTypeEvent.emit();
  }

  timeUpdate(): void {
    this.currentTime = this.playerRef?.nativeElement.currentTime ?? 0;
  }

  changeCurrentTime(time: number): void {
    if (this.playerRef === null) {
      return;
    }

    this.currentTime = time;
    this.playerRef.nativeElement.currentTime = this.currentTime;
  }

  getCover(): string {
    return getCoverUrl(this.currentSong?.id ?? "");
  }

  getAudio(): string {
    return getAudioUrl(this.currentSong?.id ?? "");
  }
}
