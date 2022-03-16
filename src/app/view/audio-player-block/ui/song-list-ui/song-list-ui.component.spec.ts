import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListUiComponent } from './song-list-ui.component';

describe('SongListUiComponent', () => {
  let component: SongListUiComponent;
  let fixture: ComponentFixture<SongListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
