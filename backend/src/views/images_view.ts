import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`
        };
    },

    renderMany(imagens: Image[]) {
        return imagens.map(image => this.render(image));
    }
}