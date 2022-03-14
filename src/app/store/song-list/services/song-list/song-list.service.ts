import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../../store/song-list.interfaces';
import { getSongsUrl } from 'src/app/server-urls';

@Injectable({
  providedIn: 'root'
})
export class SongListService {

  constructor(private http: HttpClient) { }

  getSongs(): Observable<{ songs: Song[] }> {
    return this.http.get<{ songs: Song[] }>(getSongsUrl());
  }
}
