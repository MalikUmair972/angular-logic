import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatApiComponent } from './cat-api.component';

describe('CatApiComponent', () => {
  let component: CatApiComponent;
  let fixture: ComponentFixture<CatApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
