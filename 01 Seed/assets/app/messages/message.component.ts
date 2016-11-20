/**
 * Created by Mike on 20-11-2016.
 */
import {Component, EventEmitter} from '@angular/core';
import {Message} from "./message.model";
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent{
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onEdit(){
        this.editClicked.emit('A new value');
    }

}