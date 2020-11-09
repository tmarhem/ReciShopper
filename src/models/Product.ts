class Product {
    id: string;

    imageSmallUrl: string;

    ingredientsText: string;

    productNameFr: string;

    nutriments: any;

    constructor(
      id: string,
      imageSmallUrl: string,
      ingredientsText: string,
      productNameFr: string,
      nutriments: any,
    ) {
      this.id = id;
      this.imageSmallUrl = imageSmallUrl;
      this.ingredientsText = ingredientsText;
      this.productNameFr = productNameFr;
      this.nutriments = nutriments;
    }
}

export default Product;
