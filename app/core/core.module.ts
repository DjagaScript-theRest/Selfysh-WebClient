import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './navigation/nav.component';

@NgModule({
    imports: [RouterModule, CommonModule, FormsModule],
    declarations: [NavComponent],
    exports: [NavComponent]
})
export class CoreModule { }