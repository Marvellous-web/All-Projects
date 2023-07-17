import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildCompComponent } from "./child-comp/child-comp.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [{
    path: "home",
    component: HomeComponent
},
{
    path:"child",
    component:ChildCompComponent
}]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}