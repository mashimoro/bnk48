import { Component, OnInit, OnChanges } from '@angular/core';
import { BnkService } from 'src/app/services/bnk.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../model/member';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-editbnk',
  templateUrl: './editbnk.component.html',
  styleUrls: ['./editbnk.component.css']
})
export class EditbnkComponent implements OnInit {
  mamber: Member;
  bnkForm: FormGroup;


  constructor(
    private bnk: BnkService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router

  ) { }

  ngOnInit() {
    this.bnkForm = this.fb.group({
      _id: '',
      name: '',
      imgUrl: '',
      instagramId: '',
    });

    this.bnk.getMember(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.mamber = data;
      this.bnkForm.setValue(
        this.mamber
        //  {
        //   _id: this.mamber._id,
        //   name: this.mamber.name,
        //   imgUrl: this.mamber.imgUrl,
        //   instagramId: this.mamber.instagramId,
        // }
      );
    });
  }
  reset() {
    this.bnkForm.reset(this.mamber);
  }

  submitForm() {
    console.log(this.bnkForm.value);
    this.router.navigate(['/admin']);
  }

}
