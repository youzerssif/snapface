import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;


  ohsnap!: string;

  ngOnInit() {
   
    this.ohsnap = 'Oh snap'
  }

  onAddSnap(){
    if (this.ohsnap==='Oh snap'){
      this.faceSnap.snaps++;
      this.ohsnap='Unsnap';
    }
    else{
      this.faceSnap.snaps--;
      this.ohsnap='Oh snap';
    };
    
  };
}
