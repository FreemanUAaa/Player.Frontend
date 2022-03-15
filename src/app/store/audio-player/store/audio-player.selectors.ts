import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AudioPlayerState } from "./audio-player.interfaces";
import { AudioPlayerNode } from "./audio-player.reducers";


const selectFeature = createFeatureSelector<AudioPlayerState>(AudioPlayerNode);

export const selectCurrnetSong = createSelector(selectFeature, (state) => state.currentSong);

export const selectIsPlaying = createSelector(selectFeature, (state) => state.isPlaying);

export const selectRepeatListType = createSelector(selectFeature, (state) => state.repeatListType);
