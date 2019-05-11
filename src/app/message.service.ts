import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    messages: string[] = [];
    sendDateSubject = new Subject();

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        this.messages = [];
    }
}