import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTabHeadingComponent } from './vertical-tab-heading.component';

describe('VerticalTabHeadingComponent', () => {
  let component: VerticalTabHeadingComponent;
  let fixture: ComponentFixture<VerticalTabHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalTabHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalTabHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
