import { 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule
 } from '@angular/material';
 
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ 
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [ 
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatToolbarModule,
        MatIconModule
    ],
})

export class MaterialModule { }