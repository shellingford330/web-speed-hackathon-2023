import { useQuery } from '@apollo/client';
import { useErrorHandler } from 'react-error-boundary';

import { GetZipCodeQuery, GetZipCodeQueryResponse } from '../graphql/queries';

export const useZipCode = (zipCode: string) => {
  const handleError = useErrorHandler();
  const productResult = useQuery<GetZipCodeQueryResponse>(GetZipCodeQuery, {
    onError: handleError,
    variables: {
      zipCode,
    },
  });
  console.log(productResult)

  return { zipCode: productResult.data?.zipCode };
};
