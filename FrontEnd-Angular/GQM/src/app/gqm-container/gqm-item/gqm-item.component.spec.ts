import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GQMItemComponent } from './gqm-item.component';

describe('GQMItemComponent', () => {
  let component: GQMItemComponent;
  let fixture: ComponentFixture<GQMItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GQMItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GQMItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
