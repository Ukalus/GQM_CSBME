import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GqmComponent } from './gqm.component';

describe('GqmComponent', () => {
  let component: GqmComponent;
  let fixture: ComponentFixture<GqmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GqmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GqmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
