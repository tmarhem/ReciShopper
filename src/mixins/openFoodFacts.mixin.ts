import axios from 'axios';

export default {
  methods: {
    getOneProduct(productId: string | number): Promise<unknown> {
      return axios.get(`https://world.openfoodfacts.org/api/v0/product/${productId}.json`);
    },
    getProducts(productIds: Array<string | number>): Promise<unknown[]> {
      const promises = productIds.map((pId) => this.getOneProduct(pId));
      return Promise.all(promises);
    },
  },
};
