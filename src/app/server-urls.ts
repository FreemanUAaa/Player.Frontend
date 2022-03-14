const serverUrl = "https://localhost:5000"

export const getSongsUrl = () => serverUrl + "/songs/";

export const getCoverUrl = (songId: string) => serverUrl + "/covers/" + songId;

export const getAudioUrl = (songId: string) => serverUrl + "/audios/" + songId;
