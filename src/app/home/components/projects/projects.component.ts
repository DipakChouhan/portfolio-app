import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {name: 'BootsTrap Moduler', description: 'This is bootstrap Modules project', location: 'Hyderabad, India',
      startDate: '21/08/2020', endDate: '22/08/20020', rolesAndRes: [
        'Responsibility One',
        'Responsibility Two',
        'Responsibility Three',
        'Responsibility Four',
      ]},
    {name: 'BootsTrap Moduler', description: 'This is bootstrap Modules project', location: 'Hyderabad, India',
      startDate: '21/08/2020', endDate: '22/08/20020', rolesAndRes: [
        'Responsibility One',
        'Responsibility Two',
        'Responsibility Three',
        'Responsibility Four',
      ]},
    {name: 'BootsTrap Moduler', description: 'This is bootstrap Modules project', location: 'Hyderabad, India',
      startDate: '21/08/2020', endDate: '22/08/20020', rolesAndRes: [
        'Responsibility One',
        'Responsibility Two',
        'Responsibility Three',
        'Responsibility Four',
      ]},
    {name: 'BootsTrap Moduler', description: 'This is bootstrap Modules project', location: 'Hyderabad, India',
      startDate: '21/08/2020', endDate: '22/08/20020', rolesAndRes: [
        'Responsibility One',
        'Responsibility Two',
        'Responsibility Three',
        'Responsibility Four',
      ]},
    {name: 'BootsTrap Moduler', description: 'This is bootstrap Modules project', location: 'Hyderabad, India',
      startDate: '21/08/2020', endDate: '22/08/20020', rolesAndRes: [
        'Responsibility One',
        'Responsibility Two',
        'Responsibility Three',
        'Responsibility Four',
      ]},
  ];

  constructor() { }

  ngOnInit(): void {}

}
