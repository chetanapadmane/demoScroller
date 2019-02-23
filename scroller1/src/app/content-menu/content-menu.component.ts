import { Component, OnInit,Input } from '@angular/core';
import { Question } from 'src/app/question';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.css']
})
export class ContentMenuComponent implements OnInit {
  @Input() questions:Question[]; 
  constructor() { }

  ngOnInit() {
    console.log("questions:",this.questions)
  }

  linkClick(que:Question){
    console.log("link click : ",que.key)
    for(let quest of this.questions){
      if(quest.key === que.key){
        
        quest.isVisible = true;
        console.log("change visibilty :",que)
        console.log("change visibilty :",this.questions)
      }
      else{
        quest.isVisible = false;
      }
    }
  }
}
