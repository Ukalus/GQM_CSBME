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
  GqmList:Array<any> = ["eins", "keins"]


  AddDialog(section:number):void{
    console.log(section)
   }
  dialogs(section:number):void{
    const dialogRef = this.dialog.open(dialogs, {
      //data: {name: this.type()},
    });
    setTimeout(() => {
      dialogRef.close();
    },3000)
    dialogRef.afterClosed().subscribe(result => {

    });
   }

}


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-dialogs',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  templateUrl: './dialogs.html',
  styleUrl: './dialogs.html'
})
export class dialogs{

   title:string = "Kein Titel gesetzt"
   type:number = 0; //soll angeben in welcher spalte der Tabelle
   private Close:boolean = false;

  ngOnInit(){
    console.log("Test, ob der Dialog auch initialisiert wird")

  }

}
export interface dialogData {
  type:number
}
