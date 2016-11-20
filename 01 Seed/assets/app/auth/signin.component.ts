/**
 * Created by Mike on 20-11-2016.
 */
import { Component } from "@angular/core"
import {Validators, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    private myForm: FormGroup;
    private emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    ngOnInit(): void {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(this.emailRegex)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

}