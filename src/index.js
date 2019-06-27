import { ApolloServer, gql } from 'apollo-server';

import { productFactory } from './utils/dataFactory';
import initializeDemoData from './utils';


initializeDemoData();

