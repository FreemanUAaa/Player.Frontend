import { createReducer, on } from "@ngrx/store";
import { getSongsFailed, getSongsSuccess } from "./song-list.actions";
import { SongListState } from "./song-list.interfaces";

export const SongListNode = "SongList";

export const SongListInitialState: SongListState = {
    songs: [],
    loading: false,
    error: "",
};

export const songListReducer = createReducer(SongListInitialState,
    on(getSongsSuccess, (state, { songs }) => ({ ...state, songs })),
    on(getSongsFailed, (state, { error }) => ({ ...state, error })));