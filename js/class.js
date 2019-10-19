class cloth {
    constructor (m_class, id, image, carbon) {
        this.m_class = m_class;
        this.id = id;
        this.image = image;
        this.carbon = carbon;
    }

}



class body_part {
    constructor (id, x, y, width, height, center_x, center_y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.center_x = center_x;
        this.center_y = center_y;
    }
}