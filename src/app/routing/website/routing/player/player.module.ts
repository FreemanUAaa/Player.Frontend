import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { RouterModule } from '@angular/router';
import { AudioPlayerBlockModule } from 'src/app/view/audio-player-block/audio-player-block.module';



@NgModule({
  declarations: [
    PlayerPageComponent
  ],
  imports: [
    CommonModule,
    AudioPlayerBlockModule,
    RouterModule.forChild([
      {
        path: "",
        component: PlayerPageComponent,
      }
    ])
  ]
})
export class PlayerModule { }
