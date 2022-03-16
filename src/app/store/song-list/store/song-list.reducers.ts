import { createReducer, on } from "@ngrx/store";
import { getSongsFailed, getSongsSuccess } from "./song-list.actions";
import { SongListState } from "./song-list.interfaces";

export const SongListNode = "SongList";

export const SongListInitialState: SongListState = {
    songs: [{ id: "1", name: "Stefania", author: "Kalosh", duration: 180 }, { id: "2", name: "Stefania", author: "Selo", duration: 180 }, { id: "3", name: "Stefania", author: "losh", duration: 180 }],
    loading: false,
    error: "",
};

export const songListReducer = createReducer(SongListInitialState,
    on(getSongsSuccess, (state, { songs }) => ({ ...state, songs })),
    on(getSongsFailed, (state, { error }) => ({ ...state, error })));