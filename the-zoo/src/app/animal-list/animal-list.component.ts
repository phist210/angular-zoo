import { Component, OnInit } from '@angular/core';
import { ZooService} from '../zoo-service';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
})
export class AnimalListComponent implements OnInit {

  constructor(private animals:ZooService) {
    this.animals = animals;

  }

  quantityDown(val){
    val.quantity --;
  }

   quantityUp(val){
    console.log(val)
    val.quantity ++
  }

  ngOnInit() {
    console.log(this.animals)
  }

}