import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { UsersModule } from "./users/users.module";
import { CheckDirDirective } from './check-dir.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
    declarations: [
        AppComponent,
        CheckDirDirective,
       
        ChildCompComponent,
                ParentComponent,
                HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, AuthModule,
        UsersModule,FormsModule,ReactiveFormsModule,AppRoutingModule
    ]
})
export class AppModule { }
