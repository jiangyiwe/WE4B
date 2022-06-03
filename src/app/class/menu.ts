export class Menu {

    constructor(
        public id: number,
        public nom: string,
        public description: string,
        public matériaux: string,
        public prix: number,
        public likes: number,
        public img?: string

    ) {
        this.id = id
        this.nom = nom
        this.description = description
        this.matériaux = matériaux
        this.prix = prix
        this.likes = likes
        if (img == undefined)
            img = `./assets/img/${this.id}.png`

    }
}