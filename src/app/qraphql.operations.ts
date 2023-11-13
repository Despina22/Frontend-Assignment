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
      slug
      variants {
        id
        price
        name
        stockLevel
      }
      assets {
        preview
      }
    }
  }
`;

const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        createdAt
        updatedAt
        active
        total
        lines {
          productVariant {
            id
            name
            price
          }
        }
      }
      ... on OrderModificationError {
        errorCode
        message
      }
    }
  }
`;

const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
      id
      createdAt
      updatedAt
      active
      total
      customFields
    }
  }
`;

export {
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  ADD_ITEM_TO_ORDER,
  GET_ACTIVE_ORDER,
};
