import { createReducer, on } from "@ngrx/store";
import { changeCurrentSong, changeCurrnetTime, changeRepeatListType, moveNextSuccess, movePrevSuccess, playPause } from "./audio-player.actions";
import { AudioPlayerState, RepeatListType } from "./audio-player.interfaces";

export const AudioPlayerNode = "AudioPlayer";

export const AudioPlayerInitialState: AudioPlayerState = {
    repeatListType: RepeatListType.playlistLooped,
    currentSong: null,
    isPlaying: false,
    currentTime: 0
}

export const audioPlayerReduce = createReducer(AudioPlayerInitialState,
    on(changeCurrnetTime, (state, { time }) => ({ ...state, currentTime: time })),
    on(changeCurrentSong, (state, { song }) => ({ ...state, changeCurrentSong: song })),
    on(changeRepeatListType, (state, { repeatType }) => ({ ...state, repeatListType: repeatType })),
    on(playPause, (state) => ({ ...state, isPlaying: !state.isPlaying })),
    on(moveNextSuccess, (state, { song }) => ({ ...state, currentSong: song })),
    on(movePrevSuccess, (state, { song }) => ({ ...state, currentSong: song })));

