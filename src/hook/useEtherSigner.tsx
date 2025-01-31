import { 
  BrowserProvider, 
  JsonRpcSigner 
} from 'ethers';
import { useMemo } from 'react';
import { useConnectorClient } from 'wagmi';
import type { 
  Account, 
  Chain, 
  Client, 
  Transport } from 'viem';
import type { Config } from 'wagmi';

export const clientToSigner = (client: Client<Transport, Chain, Account>) => {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

export const useEthersSigner = ({ chainId }: { chainId?: number } = {}) => {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(() => (
    client 
    ? clientToSigner(client) 
    : undefined), 
    [client]
  );
}