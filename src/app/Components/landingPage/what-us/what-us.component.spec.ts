import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatUsComponent } from './what-us.component';

describe('WhatUsComponent', () => {
  let component: WhatUsComponent;
  let fixture: ComponentFixture<WhatUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatUsComponent]
    });
    fixture = TestBed.createComponent(WhatUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
