import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Service/local-storage.service';

@Component({
  selector: 'app-interal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent implements OnInit {

  constructor(private _service: LocalStorageService) { }
  public userSession;
  public dir = 'd'; lastDir;
  public page = new Map();

  ngOnInit(): void {
    this.userSession = this._service.userDetails;
    this.buildPage();
  }

  buildPage = () => {
    this.page.set('d', { name: 'Dashboard', setFn: this.setPage, pk: 'd' })

    if (this.userSession.designation !== 'S')
      this.page.set('r', { name: 'Report', setFn: this.setPage, pk: 'r' })

  }

  public setPage = function (data) {
    this.lastDir = this.dir;
    this.dir = data;
    document.getElementById(this.lastDir).classList.replace('hightlightSelected', 'dummy');
    document.getElementById(data).classList.replace('dummy', 'hightlightSelected');
  }

}
