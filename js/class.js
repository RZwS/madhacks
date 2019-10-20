class body {
    constructor (skin, background, transportation, hat, cloth, shoes) {
        this.skin = skin;
        this.background = background;
        this.transportation = transportation;
        this.hat = [];
        this.cloth = cloth;
        this.shoes = shoes;
        this.activity = -1;
        this.carbon = [
            [1, 2, 2, 2],
            [8, 4, 6, 7],
            [2, 12, 12, 0, 12, 5],
            [2, 0, 4, 4, 5, 5],
            [6, 5, 2, 4],
            [4, 6, 7, 8],
            [1, 3, 5]
        ];
    }

    get_skin_cal() {
        if (this.skin == -1) {
            return 0;
        }
        return this.carbon[0][this.skin];
    }

    get_back_cal() {
        if (this.background == -1) {
            return 0;
        }
        return this.carbon[1][this.background];
    }

    get_trans_cal() {
        if (this.transportation == -1) {
            return 0;
        }
        console.log(this.transportation);
        return this.carbon[2][this.transportation];
    }

    get_hat_cal() {
        var cal = 0;
        // return 0;
        for (var i = 0; i < this.hat.length; i++) {
            cal += this.carbon[3][this.hat[i]];
        }
        return cal;
    }

    get_cloth_cal() {
        if (this.cloth == -1) {
            return 0;
        }
        return this.carbon[4][this.cloth];
    }

    get_shoes_cal() {
        if (this.shoes == -1) {
            return 0;
        }
        return this.carbon[5][this.shoes];
    }

    get_activity_cal() {
        if (this.activity == -1) {
            return 0;
        }
        return this.carbon[6][this.activity];
    }

    calculate_carbon() {
        return this.get_back_cal() + this.get_cloth_cal() + this.get_hat_cal() + 
            this.get_shoes_cal() + this.get_skin_cal() + this.get_trans_cal() + 
            this.get_activity_cal();
    }
}