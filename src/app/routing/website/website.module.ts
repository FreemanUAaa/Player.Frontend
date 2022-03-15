import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerModule } from './routing/player/player.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        loadChildren: () => import("./routing/player/player.module")
          .then((module) => module.PlayerModule),
      }
    ]),
  ]
})
export class WebsiteModule { }
