import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHeadingComponent } from './tab-heading.component';

describe('TabHeadingComponent', () => {
  let component: TabHeadingComponent;
  let fixture: ComponentFixture<TabHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
