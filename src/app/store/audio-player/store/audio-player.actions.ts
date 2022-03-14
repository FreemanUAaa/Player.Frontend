import { createAction, props } from "@ngrx/store";
import { Song } from "../../song-list/store/song-list.interfaces";
import { RepeatListType } from "./audio-player.interfaces";

export enum AudioPlayerActions {
    moveNext = "[Audio Player] move next",
    movePrev = "[Audio Player] move prev",
    playPause = "[Audio Player] play pause",
    moveNextSuccess = "[Audio Player] move next success",
    movePrevSuccess = "[Audio Player] move prev success",
    changeCurrnetTime = "[Audio Player] change currnet time",
    changeCurrentSong = "[Audio Player] change current song",
    changeRepeatListType = "[Audio Player] change repeat list type",
}


export const moveNext = createAction(AudioPlayerActions.moveNext, props<{ currentSong: Song }>());

export const movePrev = createAction(AudioPlayerActions.movePrev, props<{ currentSong: Song }>());

export const moveNextSuccess = createAction(AudioPlayerActions.moveNextSuccess, props<{ song: Song }>());

export const movePrevSuccess = createAction(AudioPlayerActions.movePrevSuccess, props<{ song: Song }>());


export const playPause = createAction(AudioPlayerActions.playPause);

export const changeCurrnetTime = createAction(AudioPlayerActions.changeCurrnetTime, props<{ time : number }>());

export const changeCurrentSong = createAction(AudioPlayerActions.changeCurrentSong, props<{ song: Song }>());

export const changeRepeatListType = createAction(AudioPlayerActions.changeRepeatListType, props<{ repeatType: RepeatListType }>());