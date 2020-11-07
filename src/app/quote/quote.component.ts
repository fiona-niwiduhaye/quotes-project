import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public maxCount =0;
  
  quotes =[
    new Quote(1, 'Joshua J. Marine','Fiona','Challenges are what make life interesting and overcoming them is what makes life meaningful'
    ,new Date(2020,11,1,) ,0,0),
    new Quote(1, ' Oprah Winfrey','Niwiduhaye','Doing the best at this moment puts you in the best place for the next moment'
    ,new Date(2020,11,2,) ,0,0),

  ];



  submitLike(quote,index){
    quote.likes=quote.likes+1;
    
    if(quote.likes>this.maxCount) this.maxCount=quote.likes;
    else if(quote.likes<=this.maxCount) console.log(this.maxCount);
  }




  submitUnlike(quote){
    quote.dislikes= quote.dislikes+1
  }



  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote);
  }

  completeQuote(isComplete,index){
    if(isComplete){
      let toComplete = confirm('Are you sure you want to delete?')
      if(toComplete){
        this.quotes.splice(index,1)
      }
    }
  }



  toogleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
}

  constructor() { }

  ngOnInit() {
  }

}
