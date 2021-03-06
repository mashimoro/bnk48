import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BnkService } from '../../services/bnk.service';
@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {
  members: Member[];
  constructor(
    private bnk: BnkService
  ) { }

  ngOnInit() {
    this.bnk.listBnk().subscribe(data => { this.members = data; });
  }

}
