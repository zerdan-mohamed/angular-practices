import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MaterialModule} from "../shared/material.module";
import {RecipesComponent} from "./main-content/recipes/recipes.component";
import {RecipeListComponent} from "./main-content/recipes/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./main-content/recipes/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./main-content/recipes/recipe-list/recipe-item/recipe-item.component";
import {ShoppingListComponent} from "./main-content/shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./main-content/shopping-list/shopping-edit/shopping-edit.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
