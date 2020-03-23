import {
  BlockSynchronizer,
  Synchronizer,
} from 'hermit-purple-server/lib/hermit-sync';

const syncAdapter: Synchronizer = {
  async getLocalBlockHeight(): Promise<number> {
    // return dbClient.getLatestBlockHeight()
    return 0;
  },

  async getLocalBlockExecHeight(): Promise<number> {
    // return dbClient.getLatestBlockExecHeight()
    return 0;
  },

  async onGenesis() {
    // do something on genesis
  },

  // unimplemented
  async onBlockPacked(): Promise<void> {},

  async onBlockExecuted(executed): Promise<void> {
    // myResolver.resolve(executed)
    // dbClient.saveBlock(executed.getBlock());
    // dbClient.saveTransaction(executed.getTransaction());
    // ...
    console.log(executed);
  },
};

new BlockSynchronizer(syncAdapter).run();
