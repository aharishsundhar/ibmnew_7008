import { Component, OnInit } from '@angular/core';
import { AddibmService } from './addibm.service';

@Component({
  selector: 'app-addibm',
  templateUrl: './addibm.component.html',
  styleUrls: ['./addibm.component.scss'],
})

export class AddibmComponent implements OnInit {
    public sample = {
        name: '',
    }

    constructor (
        private addibmService: AddibmService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addibmService.GpCreate(this.sample).subscribe(data => {
            this.sample.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}