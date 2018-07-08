import { Component, OnInit } from "@angular/core";
import { finalize } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { QuoteService } from "./quote.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService, private toastr: ToastrService) {
    this.toastr.success("Hello world!");
  }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: "dev" })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
