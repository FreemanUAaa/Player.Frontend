export interface SongListState {
    songs: Song[];
    loading: boolean;
    error: string;
};

export interface Song {
    id: string;
    name: string;
    author: string;
    duration: number;
};