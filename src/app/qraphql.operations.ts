import { gql } from 'apollo-angular';

const GET_PRODUCTS = gql`
  query GetProducts($options: ProductListOptions) {
    products(options: $options) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        slug
        assets {
          preview
        }
      }
    }
  }
`;

const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($productId: ID!) {
    product(id: $productId) {
      id
      name
      description
      createdAt
      updatedAt
      slug
      assets {
        preview
      }
    }
  }
`;

export { GET_PRODUCTS, GET_PRODUCT_DETAILS };
