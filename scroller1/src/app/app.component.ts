import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { Question } from 'src/app/question';
import { DatalistService } from 'src/app/datalist.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'scroller1';
  questions:Question[];
  queElement;

  @ViewChild('questionTracker') questionTracker;

  constructor(private dl: DatalistService){

  }
  
  ngOnInit(){
    this.questions = this.dl.questions;
    
  }

  ngAfterViewInit(){
    this.queElement = this.questionTracker.nativeElement.querySelectorAll('.quetion-container')
    console.log("Div : ",this.queElement);
    console.log("length : ",this.queElement.length)
  }
  
  @HostListener("window:scroll",[])
  onscroll(){
    console.log("scroll",window.pageYOffset);
    let topElement;
    for(let queEle of this.queElement){
      console.log("eleoffeset : ",queEle.offsetTop, " window : ",window.pageYOffset)

       if( queEle.offsetTop - 80 < window.pageYOffset ){
         topElement = queEle;
       }
    }
    for(let quest of this.questions){
      if(quest.key == topElement.id)
      {
        quest.isVisible = true;
      }
      else{
        quest.isVisible = false;
      }
    }
    console.log("element at top position : ",topElement.id)
  }

}
