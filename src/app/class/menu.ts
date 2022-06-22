import { Restaurant } from './restaurant';
export class Menu {

    constructor(
        public id: number,
        public nom: string,
        public description: string,
        public prix: string,
        public likes: number,
        public restaurant_id: Restaurant["id"],
        public img?: string

    ) {
        this.id = id
        this.nom = nom
        this.description = description
        this.prix = prix
        this.likes = likes
        this.restaurant_id = restaurant_id
        if (img == undefined)
            img = `./assets/img/${this.id}.png`

    }
}