import { Song } from "../../song-list/store/song-list.interfaces";

export enum RepeatListType {
    playbackShuffled = "repeat_one",
    playlistLooped = "repeat",
    songLooped = "shuffle",
}

export interface AudioPlayerState {
    repeatListType: RepeatListType;
    currentSong: Song | null;
    isPlaying: boolean;
}