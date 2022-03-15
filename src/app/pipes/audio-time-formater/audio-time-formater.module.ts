import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioTimeFormaterPipe } from './pipes/audio-time-formater/audio-time-formater.pipe';



@NgModule({
  declarations: [
    AudioTimeFormaterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class AudioTimeFormaterModule { }
