import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionateComponent } from './promocionate.component';

describe('PromocionateComponent', () => {
  let component: PromocionateComponent;
  let fixture: ComponentFixture<PromocionateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocionateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromocionateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
