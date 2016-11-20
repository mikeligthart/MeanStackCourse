/**
 * Created by Mike on 20-11-2016.
 */
import {Component, OnInit} from "@angular/core"
import {FormGroup, FormControl, Validators, Validator} from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    private myForm: FormGroup;
    private emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    ngOnInit(): void {
        this.myForm = new FormGroup({
           firstName: new FormControl(null, Validators.required),
           lastName: new FormControl(null, Validators.required),
           email: new FormControl(null, [
               Validators.required,
               Validators.pattern(this.emailRegex)
           ]),
           password: new FormControl(null, Validators.required)
        });
    }
}