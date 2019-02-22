import { BookRestProvider } from './../../providers/book-rest/book-rest';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book.model';

@Component({
  selector: 'page-book-detail',
  templateUrl: 'book-detail.html',
})
export class BookDetailPage {
  bookId:number;
  book:Book;
  constructor(public bookRest:BookRestProvider, public navCtrl: NavController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailPage');
  }

    ionViewWillEnter(){
      console.log('ionViewWillEnter');
      this.bookId=this.navParams.get("bookId");
      this.bookRest.getbooklist().subscribe( data =>{
          this.book=data.filter(book=> book.bookid === this. bookId)[0];
        }
      );
    }
    goBack(){
      this.navCtrl.pop();
    }
    
  }


