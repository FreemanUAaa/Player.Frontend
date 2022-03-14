import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map } from "rxjs";
import { Song } from "../../song-list/store/song-list.interfaces";
import { selectSongs } from "../../song-list/store/song-list.selectors";
import { moveNext, moveNextSuccess, movePrev, movePrevSuccess } from "./audio-player.actions";


@Injectable()
export class AudioPlayerEffects {
    
    songs: Song[] = [];
    
    constructor(private store$: Store, 
                private actions$: Actions) {
        this.store$.pipe(select(selectSongs)).subscribe(x => this.songs = x);
    }

    moveNext$ = createEffect(() => this.actions$.pipe(
        ofType(moveNext),
        map(({ currentSong }) => moveNextSuccess({ song: getNextSong(this.songs, currentSong) }))
    ));

    movePrev$ = createEffect(() => this.actions$.pipe(
        ofType(movePrev),
        map(({ currentSong }) => movePrevSuccess({ song: getPrevSong(this.songs, currentSong) }))
    ));

}

function getNextSong(songs: Song[], currentSong: Song): Song {
    const currentSongIndex = songs.indexOf(currentSong);

    if (currentSongIndex === -1) {
        return currentSong;
    }

    if (currentSongIndex + 1 > songs.length - 1) {
        return songs[0];
    }

    return songs[currentSongIndex + 1];
}

function getPrevSong(songs: Song[], currentSong: Song): Song {
    const currentSongIndex = songs.indexOf(currentSong);

    if (currentSongIndex === -1) {
        return currentSong;
    }

    if (currentSongIndex - 1 < 0) {
        return songs[-1];
    }

    return songs[currentSongIndex - 1];
}

