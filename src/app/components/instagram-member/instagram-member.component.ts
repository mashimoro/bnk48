import { Component, OnInit, Input } from '@angular/core';
import { Feeds } from '../../model/feed';

@Component({
  selector: 'app-instagram-member',
  templateUrl: './instagram-member.component.html',
  styleUrls: ['./instagram-member.component.css']
})
export class InstagramMemberComponent implements OnInit {
  @Input() feedmember: Feeds;
  constructor() { }

  ngOnInit() {
    console.log('feedmember--', this.feedmember);
  }

}
