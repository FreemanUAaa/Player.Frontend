import { Song } from "../../song-list/store/song-list.interfaces";

export enum RepeatListType {
    playbackShuffled = "shuffle",
    playlistLooped = "repeat",
    songLooped = "repeat_one",
}

export interface AudioPlayerState {
    repeatListType: RepeatListType;
    currentSong: Song | null;
    isPlaying: boolean;
    prevSongs: Song[];
}