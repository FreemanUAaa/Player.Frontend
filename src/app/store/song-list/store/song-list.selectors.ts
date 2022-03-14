import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SongListState } from "./song-list.interfaces";
import { SongListNode } from "./song-list.reducers";

const selectFeature = createFeatureSelector<SongListState>(SongListNode);

export const selectSongs = createSelector(selectFeature, (state) => state.songs);

export const selectError = createSelector(selectFeature, (state) => state.error);

export const selectLoading = createSelector(selectFeature, (state) => state.loading);
