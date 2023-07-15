import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-interests-compound',
  templateUrl: './interests-compound.component.html',
  styleUrls: ['./interests-compound.component.css'],
})
export class CompoundInterestsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  name = 'Compound Interests' + VERSION.major;
}
