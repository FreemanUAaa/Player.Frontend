import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Song } from 'src/app/store/song-list/store/song-list.interfaces';

@Component({
  selector: 'app-song-list-ui',
  templateUrl: './song-list-ui.component.html',
  styleUrls: ['./song-list-ui.component.css']
})
export class SongListUiComponent {

  @Input() songs: Song[] = [];

  @Input() currentSong: Song | null = null;

  @Output("close") closeEvent: EventEmitter<any> = new EventEmitter();

  @Output("selectSong") selectSongEvent: EventEmitter<{ song: Song }> = new EventEmitter<{ song: Song }>();

  close(): void {
    this.closeEvent.emit();
  }

  selectSong(song: Song): void {
    this.selectSongEvent.emit({ song });
  }
}
