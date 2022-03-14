import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayerBlockComponent } from './audio-player-block.component';

describe('AudioPlayerBlockComponent', () => {
  let component: AudioPlayerBlockComponent;
  let fixture: ComponentFixture<AudioPlayerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioPlayerBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPlayerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
