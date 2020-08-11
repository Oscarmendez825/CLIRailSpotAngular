import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { HelpComponent } from './help/help.component';
import { AdministratorComponent } from './administrator/administrator.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { StartPageComponent } from './start-page/start-page.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AdministradorPageComponent } from './administrador-page/administrador-page.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { DeleteRouteComponent } from './delete-route/delete-route.component';
import { ModifyRouteComponent } from './modify-route/modify-route.component';
import { FormComponent } from './form/form.component';

const appRoutes : Routes = [
  {
    path:'form',
    component: FormComponent
  },
  {
    path:'',
    component: StartPageComponent
  },
  {
    path:'routes',
    component: RoutesComponent
  },
  {
    path:'help',
    component: HelpComponent
  },
  {
    path:'admin',
    component: AdministratorComponent
  },
  {
    path:"adminOptions",
    component: AdministradorPageComponent
  },
  {
    path:"addRoute",
    component: AddRouteComponent
  },
  {
    path:"deleteRoute",
    component: DeleteRouteComponent
  },
  {
    path:"modifyRoute",
    component: ModifyRouteComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    HelpComponent,
    AdministratorComponent,
    StartPageComponent,
    AdministradorPageComponent,
    AddRouteComponent,
    DeleteRouteComponent,
    ModifyRouteComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
