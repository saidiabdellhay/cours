import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders = [];

  constructor(
    private leaderService: LeaderService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.leaders = this.leaderService.getLeaders();
  }

  goBack(): void {
    this.location.back();
  }

}
