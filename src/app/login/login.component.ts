import { Component, inject, OnInit } from '@angular/core';
import { UserActions } from '../state/user.actions';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideStore, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { selectUser } from '../state/user.selectors';
import { LoginHeaderComponent } from "./login-header/login-header.component";
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, LoginHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private user$ = this.store.select(selectUser);
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.store.dispatch(UserActions.loadUserState());    
  }

//  ngAfterViewInit() {
//    this.user$.pipe(take(1)).subscribe(user => {
//      if (user?.is_logged_in) {
//        this.router.navigate(['/dashboard']); 
//      }
//    });
//  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    //if (this.form.invalid) {
    //  return;
    //}

    this.loading = true;
    this.store.dispatch(UserActions.userLogin({ "username": this.f['username'].value, "password": this.f['password'].value }));

    this.user$.pipe(take(2)).subscribe(user => {
  //    if (user?.is_logged_in) {
        this.router.navigate(['/dashboard']); 
 //     }
    });

  }
}
