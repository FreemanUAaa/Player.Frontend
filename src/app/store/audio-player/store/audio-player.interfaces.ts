import { Song } from "../../song-list/store/song-list.interfaces";

export enum RepeatListType {
    playbackShuffled = "playback shuffled",
    playlistLooped = "playlist looped",
    songLooped = "song looped",
}

export interface AudioPlayerState {
    repeatListType: RepeatListType;
    currentSong: Song | null;
    isPlaying: boolean;
    currentTime: number;
}