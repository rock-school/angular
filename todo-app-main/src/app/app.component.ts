import {Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environments';
import { TaskService } from './services/task/task.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AppValidators} from "./services/app-validators";
import {from, of, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = environment.title;

  private subject = new Subject();

  constructor(private taskService: TaskService) {
    this.subject.next('hello world');
  }

  ngOnInit() {
    of('foo', 'baar').subscribe((v) => {
      console.log(v);
    })
    from([1, 2]).subscribe((v) => {
      console.log(v);
    });
    this.subject.subscribe((v) => {
      console.log('sub1 ', v)
    })
    this.subject.subscribe((v) => {
      console.log('sub2 ', v)
    })
  }

  changeSubject() {
    this.subject.next('RxJS')
  }

}
