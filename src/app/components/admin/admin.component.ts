import { Component, OnInit } from '@angular/core';
import { BnkService } from 'src/app/services/bnk.service';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  members: Member[];
  constructor(
    private bnk: BnkService
  ) { }

  ngOnInit() {
    this.bnk.listBnk().subscribe(data => {
    this.members = data;
      console.log(this.members);
    });
  }

}
