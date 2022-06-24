import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixBayImagesComponent } from './pix-bay-images.component';

describe('PixBayImagesComponent', () => {
  let component: PixBayImagesComponent;
  let fixture: ComponentFixture<PixBayImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixBayImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixBayImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
