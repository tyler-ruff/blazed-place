import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewId: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.viewId = params['id'];
      }
    );
    // Redirect if place id is empty
    if(this.viewId === "empty" || this.viewId === "" || this.viewId === null || this.viewId === undefined){
      window.location.href = "/home";
    }
  }

}
