import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GQMlayerComponent } from './gqmlayer.component';

describe('GQMlayerComponent', () => {
  let component: GQMlayerComponent;
  let fixture: ComponentFixture<GQMlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GQMlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GQMlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
