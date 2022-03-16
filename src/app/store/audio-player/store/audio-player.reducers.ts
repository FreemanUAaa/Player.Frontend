import { createReducer, on } from "@ngrx/store";
import { addPrevSong, changeCurrentSong, changeRepeatListType, playPause, removePrevSong } from "./audio-player.actions";
import { AudioPlayerState, RepeatListType } from "./audio-player.interfaces";

export const AudioPlayerNode = "AudioPlayer";

export const AudioPlayerInitialState: AudioPlayerState = {
    repeatListType: RepeatListType.playlistLooped,
    currentSong: null,
    isPlaying: false,
    prevSongs: [],
}

export const audioPlayerReduce = createReducer(AudioPlayerInitialState,
    on(changeCurrentSong, (state, { song }) => ({ ...state, currentSong: song })),
    on(changeRepeatListType, (state, { repeatType }) => ({ ...state, repeatListType: repeatType })),
    on(playPause, (state) => ({ ...state, isPlaying: !state.isPlaying })),
    on(addPrevSong, (state, { song }) => ({ ...state, prevSongs: [...state.prevSongs, song] })),
    on(removePrevSong, (state, { song }) => ({ ...state, prevSongs: state.prevSongs.filter(x => x.id !== song.id) })));
