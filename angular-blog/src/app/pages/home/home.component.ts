import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  photoCover:string = ""
  bigCardTitle:string = ""
  bigCardDescription:string = ""
  bigCardId = ""

  private id:string | null = "0"  

  smallArticle:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )
    // this.smallArticle = dataFake;
    this.setValuesToComponent("1")
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]  

    this.bigCardTitle = result.title
    this.bigCardDescription = result.description
    this.photoCover = result.photoCover
    this.bigCardId = result.id

    this.smallArticle = dataFake.map(art => art)
    this.smallArticle.shift(); // remove o primeiro elemento do array
  }

}
