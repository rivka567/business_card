import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFilesUploadComponent } from './multiple-files-upload.component';

describe('MultipleFilesUploadComponent', () => {
  let component: MultipleFilesUploadComponent;
  let fixture: ComponentFixture<MultipleFilesUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleFilesUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleFilesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
