import { Component, OnInit } from '@angular/core';
import { BackendSkills } from 'src/app/model/frontEndSkills';

@Component({
  selector: 'app-vertical-tab-heading',
  templateUrl: './vertical-tab-heading.component.html',
  styleUrls: ['./vertical-tab-heading.component.scss']
})
export class VerticalTabHeadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backendSkills : BackendSkills[] = [
    {
      title: "NODE.JS",
      content: "<strong class='text-primary mr-2 text-decoration-underline'> NODE.JS </strong> ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?"
    },
    {
      title: "EXPRESS.JS",
      content: "<strong class='text-info mr-2 text-decoration-underline'> EXPRESS.JS </strong> ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?"
    },
    {
      title: "MONGODB",
      content: "<strong class='text-danger mr-2 text-decoration-underline'> MONGODB </strong> ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?"
    },
    {
      title: "MONGOOSE",
      content: "<strong class='text-success mr-2 text-decoration-underline'> MONGOOSE </strong> ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis voluptas autem neque, quam obcaecatirerum cupiditate.Consectetur quae id dolor, commodi ipsum molestiae quam, minima explicabo, quos corrupti ut?"
    },
  ]

  selectedSkill : string = 'NODE.JS'

  onSkillChange(skill : string){
    this.selectedSkill = skill
  }
}
