import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionSearchComponent } from './cancion-search.component';

describe('CancionSearchComponent', () => {
  let component: CancionSearchComponent;
  let fixture: ComponentFixture<CancionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
