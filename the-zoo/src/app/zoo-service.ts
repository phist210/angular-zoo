import { Injectable } from '@angular/core';

@Injectable()
export class ZooService {
    public animals = [
        {
            name: 'Goat',
            species: 'Mammal',
            weight: 50,
            height: 140,
            quantity: 4,
            imageUrl: 'http://pngimg.com/uploads/goat/goat_PNG13154.png?i=1',
            desc: 'The goat. The goatest of all the animal land.',
        },
    ]
}