import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [ MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressBarModule,
        MatToolbarModule ]
})

export class MaterialModule { }
