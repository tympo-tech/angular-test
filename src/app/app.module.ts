import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './shared/store/user.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, LoginFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
