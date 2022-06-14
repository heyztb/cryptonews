import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Cryptonews } from "../target/types/cryptonews";

describe("cryptonews", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Cryptonews as Program<Cryptonews>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
