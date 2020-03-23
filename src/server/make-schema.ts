import { nexusTypes } from 'hermit-purple-server/lib/hermit-graphql';
import {
  makeSchema,
  queryField,
} from 'hermit-purple-server/lib/hermit-lib/nexus';
import { resolveGenerated } from '../utils';

const customTypes = {
  custom: queryField(t => {
    t.string('foo', {
      resolve() {
        return 'bar';
      },
    });
  }),
};

export const schema = makeSchema({
  types: {
    ...nexusTypes,
    ...customTypes,
  },
  outputs: {
    schema: resolveGenerated('schema.graphql'),
    typegen: resolveGenerated('nexus.d.ts'),
  },
  typegenAutoConfig: {
    contextType: 'ctx.ServerContext',
    backingTypeMap: {
      Address: 'string',
      Bytes: 'string',
      Hash: 'string',
      Uint64: 'string',
    },
    sources: [
      {
        source: require.resolve('./context'),
        alias: 'ctx',
      },
    ],
  },
});
