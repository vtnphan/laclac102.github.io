import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Python', level: 90 },
    { name: 'Workflow management (NextFlow)', level: 90 },
    { name: 'RNAseq analysis', level: 70 },
    { name: 'DNA Methylation sequencing analysis', level: 50 },
    { name: 'Metagenomics', level: 70 }
  ];
}
