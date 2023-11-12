import { gql } from 'apollo-angular';

const GET_PRODUCTS = gql`
  query GetProducts {
    products(options: { take: 8, skip: 0 }) {
      items {
        id
        name
        description
        createdAt
        slug
        assets {
          preview
        }
      }
    }
  }
`;

export { GET_PRODUCTS };
