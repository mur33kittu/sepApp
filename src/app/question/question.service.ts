import { Injectable } from '@angular/core';
import { QuestionBase } from './modal/question-base';
import { DropdownQuestion } from './modal/question-dropdown';
import { TextboxQuestion } from './modal/question-textbox';
import { OptionQuestion } from './modal/question-option';

@Injectable()
export class QuestionService {

    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    getQuestions() {

        let questions: QuestionBase<any>[] = [

            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            }),

            new OptionQuestion({
                key: 'gender',
                label: 'Gender',
                order: 2,
                required: true,
                value: 'male',
                options: [
                    { label: 'male', value: 'male' },
                    { label: 'female', value: 'female' }
                ]
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}