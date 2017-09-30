import { Component } from '@angular/core';

import { Animal }    from '../animals.model';

@Component({
  selector: 'animal-form',
  templateUrl: './animal-form.component.html'
})

export class AnimalFormComponent {

  newAnimal() {
    this.model = new Animal('a', 'a', 0, 0, '', '');
  }

  species = ['Mammal', 'Bird',
             'Fish', 'Reptile'];

  model = new Animal('Goat', this.species[0], 50, 140, 'http://pngimg.com/uploads/goat/goat_PNG13154.png?i=1', 'The goat. The goatest of all the animal land.');

  submitted = false;

  onSubmit() { this.submitted = true; }
}