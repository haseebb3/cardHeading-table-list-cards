import { Component, OnInit } from '@angular/core';
import { FrontEndSkill } from 'src/app/model/frontEndSkills';

@Component({
  selector: 'app-tab-heading',
  templateUrl: './tab-heading.component.html',
  styleUrls: ['./tab-heading.component.scss']
})
export class TabHeadingComponent implements OnInit {
  skills: Array<string> = ["AWS", "DOCKER", "CONTAINARIZATION", "CI/CD"];
  constructor() { }

  ngOnInit(): void {
  }

  currentSkill: string = 'AWS';
  onSkillChange(skill: string): void {
    this.currentSkill = skill;
    console.log("hello " + skill);

  }

  frontEndSkills: Array<FrontEndSkill> = [
    {
      title: "HTML",
      content: "<strong class='text-primary mr-2 text-decoration-underline'> HTML </strong> ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?"
    },
    {
      title: "CSS",
      content: "<strong class='text-info mr-2 text-decoration-underline'> CSS </strong> ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?"
    },
    {
      title: "JAVASCRIPT",
      content: "<strong class='text-danger mr-2 text-decoration-underline'> JAVASCRIPT </strong> ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?"
    },
    {
      title: "ANGULAR",
      content: "<strong class='text-success mr-2 text-decoration-underline'> ANGULAR </strong> ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?"
    },
  ]

  selectedSkill : string = "HTML"
  onSkillChange2(skill :string){
    this.selectedSkill = skill
  }

}
