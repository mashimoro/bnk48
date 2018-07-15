import { Component, OnInit } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { Feed, Feeds } from '../../model/feed';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {
  instagrams: Feed;
  feeds: Feeds[];
  constructor(
    private bnk: BnkService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bnk.instagram(this.route.snapshot.paramMap.get('instagramId')).subscribe(data => {
      this.instagrams = data;
      this.feeds = this.instagrams.feeds.filter(feed => feed.thumbnail.endsWith('.jpg'));

     });
  }

}
