import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialoguebox',
  templateUrl: './dialoguebox.component.html',
  styleUrls: ['./dialoguebox.component.css']
})
export class DialogueboxComponent implements OnInit {
  mydata: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.mydata = data;
    console.log('d--->',data);
  }

  ngOnInit(): void {
  }

}
