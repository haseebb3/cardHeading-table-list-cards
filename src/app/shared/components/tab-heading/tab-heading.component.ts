import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-heading',
  templateUrl: './tab-heading.component.html',
  styleUrls: ['./tab-heading.component.scss']
})
export class TabHeadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentSkill : string = 'AWS';
  onSkillChange(skill : string) : void{
    this.currentSkill = skill;
    console.log("hello " + skill);
    
  }
}
