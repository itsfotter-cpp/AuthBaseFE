import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { RegistrationComponent } from './registration/registration/registration.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InserimentoRichiestaComponent } from './inserimento-richiesta/inserimento-richiesta.component';
import { GestioneRichiesteComponent } from './gestione-richieste/gestione-richieste.component';
import { DatePipe } from '@angular/common';
import { DaysBetweenDatesPipe } from './shared/days-between-dates.pipe';
import { RichiestePersonaliComponent } from './richieste-personali/richieste-personali.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        UserComponent,
        LoginComponent,
        HeaderComponent,
        ForbiddenComponent,
        RegistrationComponent,
        InserimentoRichiestaComponent,
        GestioneRichiesteComponent,
        RichiestePersonaliComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        UserService,
        DatePipe
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ToastrModule.forRoot({
            timeOut: 4000,
            positionClass: 'toast-top-center'
        }),
        DaysBetweenDatesPipe
    ]
})
export class AppModule { }
