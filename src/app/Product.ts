export class Product{
    id          : number | String;
    price       : number;
    name        : String;
    description : String;
    
    constructor(id, price, name, description){
        this.id          = id;
        this.price       = price;
        this.name        = name
        this.description = description;
    }
}