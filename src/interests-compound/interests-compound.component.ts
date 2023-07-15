import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests-compound',
  templateUrl: './interests-compound.component.html',
  styleUrls: ['./interests-compound.component.css'],
})
export class CompoundInterestsComponent {
  constructor() {}

  ngOnInit() {}

  name = 'Compound Interests' + VERSION.major;
}
