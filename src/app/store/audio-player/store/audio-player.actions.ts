import { createAction, props } from "@ngrx/store";
import { Song } from "../../song-list/store/song-list.interfaces";
import { RepeatListType } from "./audio-player.interfaces";

export enum AudioPlayerActions {
    moveNext = "[Audio Player] move next",
    movePrev = "[Audio Player] move prev",
    playPause = "[Audio Player] play pause",
    changeCurrentSong = "[Audio Player] change current song",
    changeRepeatListType = "[Audio Player] change repeat list type",
    addPrevSong = "[Audio Player] add prev song",
    removePrevSong = "[Audio Player] remove prev song",
}

export const addPrevSong = createAction(AudioPlayerActions.addPrevSong, props<{ song: Song }>());

export const removePrevSong = createAction(AudioPlayerActions.removePrevSong, props<{ song: Song }>());


export const moveNext = createAction(AudioPlayerActions.moveNext);

export const movePrev = createAction(AudioPlayerActions.movePrev);


export const playPause = createAction(AudioPlayerActions.playPause);

export const changeCurrentSong = createAction(AudioPlayerActions.changeCurrentSong, props<{ song: Song | null }>());

export const changeRepeatListType = createAction(AudioPlayerActions.changeRepeatListType, props<{ repeatType: RepeatListType }>());