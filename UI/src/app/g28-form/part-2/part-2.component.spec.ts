import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { Part2Component } from './part-2.component';
import {FormFieldLOVService} from "../../shared/FormFieldLOV.service";

describe('Part2Component', () => {
  let component: Part2Component;
  let fixture: ComponentFixture<Part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part2Component ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [FormFieldLOVService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
