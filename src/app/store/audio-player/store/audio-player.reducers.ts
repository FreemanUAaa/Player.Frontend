import { createReducer, on } from "@ngrx/store";
import { changeCurrentSong, changeRepeatListType, moveNextSuccess, movePrevSuccess, playPause } from "./audio-player.actions";
import { AudioPlayerState, RepeatListType } from "./audio-player.interfaces";

export const AudioPlayerNode = "AudioPlayer";

export const AudioPlayerInitialState: AudioPlayerState = {
    repeatListType: RepeatListType.playlistLooped,
    currentSong: null,
    isPlaying: false,
}

export const audioPlayerReduce = createReducer(AudioPlayerInitialState,
    on(changeCurrentSong, (state, { song }) => ({ ...state, changeCurrentSong: song })),
    on(changeRepeatListType, (state, { repeatType }) => ({ ...state, repeatListType: repeatType })),
    on(playPause, (state) => ({ ...state, isPlaying: !state.isPlaying })),
    on(moveNextSuccess, (state, { song }) => ({ ...state, currentSong: song })),
    on(movePrevSuccess, (state, { song }) => ({ ...state, currentSong: song })));

