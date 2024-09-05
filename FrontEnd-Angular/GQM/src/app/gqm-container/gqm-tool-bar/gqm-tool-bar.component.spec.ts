import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GqmToolBarComponent } from './gqm-tool-bar.component';

describe('GqmToolBarComponent', () => {
  let component: GqmToolBarComponent;
  let fixture: ComponentFixture<GqmToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GqmToolBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GqmToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
