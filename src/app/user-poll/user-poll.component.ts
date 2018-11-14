import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class UserPollComponent implements OnInit {
  
  @Input() title = 'default label';
  @Output() subscribe = new EventEmitter<string>();

  newsletterForm: FormGroup;

  get email() {
    return this.newsletterForm.get('email');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newsletterForm = new FormGroup(
      {
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
        }),
      },
      { updateOn: 'submit' }
    );
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      this.subscribe.emit(this.email.value);
    }
  }
}
