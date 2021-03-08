import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { map } from 'rxjs/operators';
import { CREATE_QUOTE, DELETE_QUOTE, GET_QUOTES } from './queries';

@Injectable()
export class GeneralService {
    constructor(private apollo: Apollo) { }
    getQuotes() {
        return this.apollo
            .watchQuery({
                query: GET_QUOTES,
            })
            .valueChanges.pipe(
                map((result: any) => {
                    console.log(result.data.quotes.quotes);
                    return result.data.quotes.quotes;
                })
            );
    }
    createQuote(quote: string, author: string) {
        this.apollo
          .mutate({
            mutation: CREATE_QUOTE,
            refetchQueries: [{ query: GET_QUOTES }],
            variables: {
              quote: quote,
              author: author,
            },
          })
          .subscribe(() => {
            console.log("created");
          });
      }

  deleteQuote(id: string) {
    const _id = id.toString();
    console.log(_id);
    this.apollo
      .mutate({
        mutation: DELETE_QUOTE,
        refetchQueries: [{ query: GET_QUOTES }],
        variables: {
          id: _id,
        },
      })
      .subscribe(() => {
        console.log("deleted");
      });
  }
}
