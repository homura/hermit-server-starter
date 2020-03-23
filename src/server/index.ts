import { GraphQLServer, Options } from 'graphql-yoga';
import { HERMIT_PORT } from 'hermit-purple-server/lib/hermit-config';
import { createListLimitationValidator } from 'hermit-purple-server/lib/hermit-graphql/graphql-middlewares/complexity';
import { context } from './context';
import { schema } from './make-schema';

const validateListLimitation = createListLimitationValidator({
  fields: ['blocks', 'transactions'],
  maxFieldSize: 2000,
  maxSkipSize: 20000,
});

const server = new GraphQLServer({
  schema,
  context,
});

const options: Options = {
  port: HERMIT_PORT,
  validationRules: req => [context => validateListLimitation(context, req)],
};

server.start(options, () =>
  console.log(`🚀 Server ready at: http://127.0.0.1:${HERMIT_PORT}`),
);
