import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { LocalStorageService } from 'src/app/Service/local-storage.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input()
  public designation;

  public users = new Map();

  constructor(private _httpService: HttpService, private _local: LocalStorageService) { }

  ngOnInit(): void {
    this.fetchReport(this._local.userDetails.designation);
  }

  async deleteUser(data) {
    await this._httpService.deleteUserbyEmail(data).subscribe(
      (res: any) => {
        if (!res.error) {
          if (data === this._local.userDetails.email)
            this._local.reset()
          this.users.delete(data);
        } else {
          alert(`${res.message}`);
        }
      }
    )
  }

  async fetchReport(desgn) {
    await this._httpService.fetchReportByDesignation(desgn).subscribe(
      (res: any) => {
        if (!res.error) {
          for (let user of res.data)
            this.users.set(user.email, user);
        }
      }
    )
  }
}
