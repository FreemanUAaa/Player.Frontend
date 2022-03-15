import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SongListStoreModule } from './store/song-list/song-list.store.module';
import { AudioPlayerStoreMudule } from './store/audio-player/audio-player.store.module';
import { WebsiteModule } from './routing/website/website.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WebsiteModule,

    SongListStoreModule,
    AudioPlayerStoreMudule,

    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
