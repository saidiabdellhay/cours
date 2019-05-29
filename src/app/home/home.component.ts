import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service'
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(
    private dishservice: DishService,
    private leaderService: LeaderService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.leader = this.leaderService.getFeaturedLeader();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
