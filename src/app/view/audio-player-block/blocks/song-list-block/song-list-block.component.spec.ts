import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListBlockComponent } from './song-list-block.component';

describe('SongListBlockComponent', () => {
  let component: SongListBlockComponent;
  let fixture: ComponentFixture<SongListBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongListBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
