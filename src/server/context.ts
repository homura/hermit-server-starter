import { DAO } from 'hermit-purple-server';

export interface ServerContext {
  dao: DAO;
}

export const context: ServerContext = {
  dao: {
    block: {
      async blocks(args) {
        // dbClient.getBlock(args);
        return [{ height: 10, /* ... */ }];
      },

      // TODO
    },
  },
};
