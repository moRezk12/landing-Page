import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectProductComponent } from './collect-product.component';

describe('CollectProductComponent', () => {
  let component: CollectProductComponent;
  let fixture: ComponentFixture<CollectProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectProductComponent]
    });
    fixture = TestBed.createComponent(CollectProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
