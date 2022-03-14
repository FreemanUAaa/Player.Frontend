import { createAction, props } from "@ngrx/store";
import { Song } from "./song-list.interfaces";

export enum SongListActions {
    getSongs = "[Song List] get songs",
    getSongsSuccess = "[Song List] get songs success",
    getSongsFailed = "[Song List] get songs failed"
}

export const getSongs = createAction(SongListActions.getSongs);

export const getSongsSuccess = createAction(SongListActions.getSongsSuccess, props<{ songs: Song[] }>());

export const getSongsFailed = createAction(SongListActions.getSongsFailed, props<{ error: string }>());
