import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { CardCompComponent } from './card-comp/card-comp.component';
import { DynamicFormQuestionComponent } from './question/dynamic-form-question.component.';
import { DynamicFormComponent } from './question/dynamic-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPollComponent } from './user-poll/user-poll.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    CardCompComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    UserPollComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [UserPollComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(UserPollComponent, { injector: this.injector });
    customElements.define('user-poll', el);
  }

  ngDoBootstrap() {}
}
