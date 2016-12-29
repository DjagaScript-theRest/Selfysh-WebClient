import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavComponent } from './navigation/nav.component';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class CoreModule { }