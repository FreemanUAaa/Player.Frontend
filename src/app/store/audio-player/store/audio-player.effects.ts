import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map } from "rxjs";
import { Song } from "../../song-list/store/song-list.interfaces";
import { selectSongs } from "../../song-list/store/song-list.selectors";
import { addPrevSong, changeCurrentSong, moveNext, movePrev, removePrevSong } from "./audio-player.actions";
import { RepeatListType } from "./audio-player.interfaces";
import { selectCurrnetSong, selectPrevSongs, selectRepeatListType } from "./audio-player.selectors";


@Injectable()
export class AudioPlayerEffects {
    
    songs: Song[] = [];
    prevSong: Song[] = [];
    currentSong: Song | null = null;
    repeatListType: RepeatListType = RepeatListType.playlistLooped;

    constructor(private store$: Store, 
                private actions$: Actions) {
        this.store$.pipe(select(selectSongs)).subscribe(x => this.songs = x);
        this.store$.pipe(select(selectPrevSongs)).subscribe(x => this.prevSong = x);
        this.store$.pipe(select(selectCurrnetSong)).subscribe(x => this.currentSong = x);
        this.store$.pipe(select(selectRepeatListType)).subscribe(x => this.repeatListType = x);
    }

    moveNext$ = createEffect(() => this.actions$.pipe(
        ofType(moveNext),
        map(() => changeCurrentSong({ song: this.moveNext() }))
    ));

    movePrev$ = createEffect(() => this.actions$.pipe(
        ofType(movePrev),
        map(() => changeCurrentSong({ song: this.movePrev() }))
    ));

    moveNext(): Song | null {
        if (this.songs.length === 0) {
            return null;
        }
        
        let result: Song;

        switch (this.repeatListType) {
            case RepeatListType.playlistLooped: result = this.getNextSong(); break;
            case RepeatListType.songLooped:
            case RepeatListType.playbackShuffled: result = this.getRandomSong(); break;
            default: return this.currentSong;
        }

        if (this.currentSong !== null) {
            this.store$.dispatch(addPrevSong({ song: this.currentSong }));
        }

        return result;
    }

    getNextSong(): Song {
        if (this.currentSong === null) {
            return this.songs[0];
        }
        
        const currentSongIndex = this.songs.indexOf(this.currentSong);
    
        if (currentSongIndex === -1) {
            return this.currentSong;
        }
    
        if (currentSongIndex + 1 > this.songs.length - 1) {
            return this.songs[0];
        }
    
        return this.songs[currentSongIndex + 1]; 
    }
    
    getRandomSong(): Song {
        let randomIndex: number;
        
        if (this.currentSong === null) {
            return this.songs[Math.floor(Math.random() * this.songs.length)];
        }

        const currentSongIndex: number = this.songs.indexOf(this.currentSong);

        while (true) {
            randomIndex = Math.floor(Math.random() * this.songs.length);

            if (randomIndex !== currentSongIndex) {
                return this.songs[randomIndex];
            }
        }
    }

    movePrev(): Song {
        const song = this.prevSong[this.prevSong.length - 1] ?? this.currentSong;

        this.store$.dispatch(removePrevSong({ song }));

        return song;
    }
}



