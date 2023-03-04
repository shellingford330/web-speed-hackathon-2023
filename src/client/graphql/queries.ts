import { gql } from '@apollo/client';

import {
  AuthUserFragmentResponse,
  FeatureSectionFragmentResponse,
  ProductReviewFragmentResponse,
  ProductWithReviewFragmentResponse,
  RecommendationFragmentResponse,
  ZipCodeFragment,
  ZipCodeFragmentResponse,
} from './fragments';
import {
  AuthUserFragment,
  FeatureSectionFragment,
  ProductReviewFragment,
  ProductWithReviewFragment,
  RecommendationFragment,
} from './fragments';

export const GetAuthUserQuery = gql`
  ${AuthUserFragment}

  query GetAuthUser {
    me {
      ...AuthUserFragment
    }
  }
`;
export type GetUserAuthQueryResponse = {
  me: AuthUserFragmentResponse | null;
};

export const GetProductReviewsQuery = gql`
  ${ProductReviewFragment}

  query GetProductReviews($productId: Int!) {
    product(id: $productId) {
      ...ProductReviewFragment
    }
  }
`;
export type GetProductReviewsQueryResponse = {
  product: ProductReviewFragmentResponse;
};

export const GetProductDetailsQuery = gql`
  ${ProductWithReviewFragment}

  query GetProductDetails($productId: Int!) {
    product(id: $productId) {
      ...ProductWithReviewFragment
    }
  }
`;
export type GetProductDetailsQueryResponse = {
  product: ProductWithReviewFragmentResponse;
};

export const GetRecommendationsQuery = gql`
  ${RecommendationFragment}

  query GetRecommendations {
    recommendations {
      ...RecommendationFragment
    }
  }
`;
export type GetRecommendationsQueryResponse = {
  recommendations: RecommendationFragmentResponse[];
};

export const GetFeatureSectionsQuery = gql`
  ${FeatureSectionFragment}

  query GetFeatureSections {
    features {
      ...FeatureSectionFragment
    }
  }
`;
export type GetFeatureSectionsQueryResponse = {
  features: FeatureSectionFragmentResponse[];
};

export const GetZipCodeQuery = gql`
  ${ZipCodeFragment}

  query GetZipCode($zipCode: String!) {
    zipCode(zipCode: $zipCode) {
      ...ZipCodeFragment
    }
  }
`;
export type GetZipCodeQueryResponse = {
  zipCode: ZipCodeFragmentResponse;
};
