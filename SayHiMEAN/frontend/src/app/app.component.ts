import { Component, OnInit } from "@angular/core";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GeneralService } from "./services/general.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "frontend";

  quotes: Observable<any>;

  constructor(private apollo: Apollo, private generalService: GeneralService) { }

  ngOnInit() {
    this.quotes = this.generalService.getQuotes();
  }

  create(quote: string, author: string) {
    this.generalService.createQuote(quote, author);
  }

  delete(id: string) {
    this.generalService.deleteQuote(id);
  }
}