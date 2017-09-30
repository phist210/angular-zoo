import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ZooService } from '../zoo-service';
import { Animal }    from '../animals.model';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms'


@Component({
  selector: 'animal-form',
  templateUrl: './animal-form.component.html'
})

export class AnimalFormComponent {
  animalForm: FormGroup;
  name: AbstractControl;
  height: AbstractControl;
  weight: AbstractControl;
  quantity: AbstractControl;
  description:AbstractControl;
  imageUrl:  AbstractControl;

  newAnimal() {
    this.model = new Animal('a', 'a', 0, 0, 0, '', '');
  }

  species = ['Mammal', 'Bird',
             'Fish', 'Reptile'];

  model = new Animal('Goat', this.species[0], 50, 140, 4, 'http://pngimg.com/uploads/goat/goat_PNG13154.png?i=1', 'The goat. The goatest of all the animal land.');

  submitted = false;

  urlValidator(control: FormControl){
    if(!control.value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)){
      return{invalidPath: true}
    }
  }

  constructor(fb: FormBuilder, private animals:ZooService) {
    this.animalForm = fb.group({
    name: ['',Validators.compose([
      Validators.required
    ])],
    species: ['',Validators.compose([
      Validators.required
    ])],
    height: ['',Validators.compose([
      Validators.required
    ])],
    weight: ['',Validators.compose([
      Validators.required
    ])],
    quantity: ['',Validators.compose([
      Validators.required
    ])],
    description: ['',Validators.compose([
        Validators.required,
        Validators.minLength(10),

      ])],
    imagePath: ['',Validators.compose([
      Validators.required,
      this.urlValidator
    ])],
  });
  this.name = this.animalForm.controls['name']
  this.height = this.animalForm.controls['averageHeight']
  this.weight = this.animalForm.controls['averageWeight']
  this.description = this.animalForm.controls['description']
  this.imageUrl = this.animalForm.controls['imagePath']
  this.quantity = this.animalForm.controls['quantity']
    this.animals = animals;
  }

  onSubmit(value){
    this.submitted = true;
    console.log(value);
    this.animals.animals.push(value);
  }

  ngOnInit() {
    console.log(this.animals)
  }
}