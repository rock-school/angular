import { Component } from '@angular/core';
import {environment} from "../../../environments/environments";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AppValidators} from "../../services/app-validators";
import {TaskService} from "../../services/task/task.service";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  title = environment.title;
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required], []),
    lastName: new FormControl(''),
    email: new FormControl('', [AppValidators.email, Validators.required]),
  });

  profileForm2 = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    email: ['', [AppValidators.email, Validators.required]],
    aliases: this.fb.array([
      this.fb.control('')
    ]),
    test: ['']
  })

  constructor(private taskService: TaskService, private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm2.statusChanges.subscribe((v) => {
      console.log(v);
    })
    this.profileForm2.controls.test.disable();
    this.taskService.getToDos();
    this.profileForm2.valueChanges.pipe().subscribe((value) => {
      console.log(value);
    })
    this.profileForm2.controls.email.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  get aliases() {
    return this.profileForm2.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  chnageLastName() {
    /*    this.profileForm.setValue({
          firstName: '123',
          email: 'sdf',
          lastName: 'sdf'
        });
        this.profileForm.patchValue({
          lastName: '123123123'
        });
        this.profileForm.reset();*/
    /*    this.profileForm.controls.lastName.setValue('', { });*/
    this.profileForm2.controls.lastName.patchValue('some last name', {emitEvent: false } );

  }
  onSubmit() {
    console.warn(this.profileForm2.value);
  }
}
