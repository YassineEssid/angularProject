import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductReactiveComponent } from './form-product-reactive.component';

describe('FormProductReactiveComponent', () => {
  let component: FormProductReactiveComponent;
  let fixture: ComponentFixture<FormProductReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductReactiveComponent]
    });
    fixture = TestBed.createComponent(FormProductReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
