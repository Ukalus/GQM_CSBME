import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GQMContainerComponent } from './gqm-container.component';

describe('GQMContainerComponent', () => {
  let component: GQMContainerComponent;
  let fixture: ComponentFixture<GQMContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GQMContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GQMContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
