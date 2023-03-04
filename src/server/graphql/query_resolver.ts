import type { Context } from '@apollo/client';
import type { GraphQLFieldResolver } from 'graphql';

import { FeatureSection } from '../../model/feature_section';
import { Product } from '../../model/product';
import { Recommendation } from '../../model/recommendation';
import { User } from '../../model/user';
import zipcodeJa from 'zipcode-ja';
import { dataSource } from '../data_source';
import { ZipCode } from '../../model/zipcode';

type QueryResolver = {
  features: GraphQLFieldResolver<unknown, Context, never, Promise<FeatureSection[]>>;
  me: GraphQLFieldResolver<unknown, Context, never, Promise<User | null>>;
  product: GraphQLFieldResolver<unknown, Context, { id: number }, Promise<Product>>;
  recommendations: GraphQLFieldResolver<unknown, Context, never, Promise<Recommendation[]>>;
  user: GraphQLFieldResolver<unknown, Context, { id: number }, Promise<User>>;
  zipCode: GraphQLFieldResolver<unknown, Context, { zipCode: string }, Promise<ZipCode>>
};

export const queryResolver: QueryResolver = {
  features: () => {
    return dataSource.manager.find(FeatureSection);
  },
  me: async (_parent, _args, { session }) => {
    if (session['userId'] == null) {
      return null;
    }
    return dataSource.manager.findOneOrFail(User, {
      where: { id: session['userId'] },
    });
  },
  product: (_parent, args) => {
    return dataSource.manager.findOneOrFail(Product, {
      where: { id: args.id },
    });
  },
  recommendations: () => {
    return dataSource.manager.find(Recommendation);
  },
  user: (_parent, args) => {
    return dataSource.manager.findOneOrFail(User, {
      where: { id: args.id },
    });
  },
  zipCode: (_parent, args) => {
    return zipcodeJa[args.zipCode];
  }
};
