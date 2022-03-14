import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayerUiComponent } from './audio-player-ui.component';

describe('AudioPlayerUiComponent', () => {
  let component: AudioPlayerUiComponent;
  let fixture: ComponentFixture<AudioPlayerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioPlayerUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPlayerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
