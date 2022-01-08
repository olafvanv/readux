import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";
import { NavigationComponent } from "./navigation.component";

@NgModule({
  declarations: [NavigationComponent, BottomBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
