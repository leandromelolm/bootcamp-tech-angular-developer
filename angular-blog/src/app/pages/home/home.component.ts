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
  

  smallPhotoCover:string = ""
  smallCardTitle:string = ""
  smallCardId: string | null = "0"

  smallPhotoCover2:string = ""
  smallCardTitle2:string = ""
  smallCardId2: string | null = "0"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent("1")
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]  

    this.bigCardTitle = result.title
    this.bigCardDescription = result.description
    this.photoCover = result.photoCover
    this.bigCardId = result.id

    const res = dataFake.map(art => art)
    console.log(res)
    this.smallPhotoCover = res[1].photoCover
    this.smallCardTitle = res[1].title
    this.smallCardId = res[1].id

    this.smallPhotoCover2 = res[2].photoCover
    this.smallCardTitle2 = res[2].title
    this.smallCardId2 = res[2].id
  }
  

}
