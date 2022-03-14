import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { SongListService } from "../services/song-list/song-list.service";
import { getSongs, getSongsFailed, getSongsSuccess } from "./song-list.actions";


@Injectable()
export class SongListEffects {

    constructor(private actions$: Actions,
                private songListService: SongListService) { }

    getSongs$ = createEffect(() => this.actions$.pipe(
        ofType(getSongs),
        switchMap(() => this.songListService.getSongs().pipe(
            map((songs) => getSongsSuccess(songs)),
            catchError((error) => of(getSongsFailed(error)))
        ))
    ));

}