class body {
    constructor (skin, background, transportation, hat, cloth, shoes, decoration) {
        this.skin = skin;
        this.background = background;
        this.transportation = transportation;
        this.hat = hat;
        this.cloth = cloth;
        this.shoes = shoes;
        this.decoration = decoration;
    }

    calculate_carbon() {
        return this.skin.carbon + this.background.carbon + this.transportation.carbon
            + this.hat.carbon + this.cloth.carbon + this.shoes.carbon + this.decoration.carbon;
    }
}