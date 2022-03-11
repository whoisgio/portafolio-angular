import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuratoSlider:any;
  public autor:any;

  constructor() {
    this.widthSlider=0;
    this.anchuratoSlider=0
    this.autor=0;
   }

  ngOnInit(): void {
   
    // $("#logo").click(function(){
    //   console.log("Test");
    // })

    
  }

  cargarSlider(){
    
    this.anchuratoSlider=this.widthSlider;
    
  }
  resetearSlider(){
    this.anchuratoSlider=null;
  }
  
  getAutor(event:any){
    this.autor=event;
  }
 
}
