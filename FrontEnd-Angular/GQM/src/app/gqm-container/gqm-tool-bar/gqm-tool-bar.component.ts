import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle,} from '@angular/material/dialog';
import { Y } from '@angular/cdk/keycodes';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-gqm-tool-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  templateUrl: './gqm-tool-bar.component.html',
  styleUrl: './gqm-tool-bar.component.scss'
})
export class GqmToolBarComponent {
  readonly dialog = inject(MatDialog);
  GqmList:Array<any> = ["eins","kein"]


  AddDialog(section:number):void{
    console.log(section)
   }
  DeletDialog(section:number):void{
    const dialogRef = this.dialog.open(deletDialog, {
      //data: {name: this.type()},
    });

    dialogRef.afterClosed().subscribe(result => {

    });
   }

}


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-DeletDialog',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  templateUrl: './deletdialog.html',
  styleUrl: './deletdialog.html'
})
export class deletDialog{
  
   title:string = "Kein Tittle gesetzt"
    type:number = 0; //soll angeben in welcher spalte der Tabelle 

  ngOnInit(){
    console.log("test ob der Dialog auch iniziealisiert wird")
  }
}
export interface DeletDialogData{
  type:number
}