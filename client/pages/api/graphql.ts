import { schema } from '../../graphql/schema';
// import typeDefs from '../../graphql/schema';
import resolvers from '../../graphql/resolvers';
import { ApolloServer } from 'apollo-server';

const apolloServer = new ApolloServer({ typeDefs: schema, resolvers });

export const config = {
	api: {
		bodyParser: false
	}
};

export default async function handler(req, res) {
	await apolloServer.start();
	// await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
