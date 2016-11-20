/**
 * Created by Mike on 20-11-2016.
 */
import { Component } from "@angular/core"

@Component({
    selector: 'app-messages',
    template: `
      <div class="row">
        <app-message-input></app-message-input>
      </div>
      <hr>
     <div class="row">
       <app-message-list></app-message-list>
     </div>
    `
})
export class MessagesComponent {

}