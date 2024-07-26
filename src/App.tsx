import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { useEthersSigner } from './hook/useEtherSigner';
import { useEffect } from 'react';
import { useCalendarContract } from './hook/useCalendarContract';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { Address } from 'viem';


function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  
  const { data } = useBalance({ address: account.address });

  const signer = useEthersSigner();
  const calendarContract = useCalendarContract();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      const data = await calendarContract.getEventTitle();
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const eventTitles = data.map((event: any) => ({
        title: event[0],
        parctitipationAmount: Number(event[1]),
        parctitipationAccount: event[2],
      }));
      console.log(eventTitles)
    })();
  }, [signer]);

  
  return (
    <>
      <div>
        <h2>Account</h2>

        <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="btn btn-secondary dark:hover:bg-black/20 btn-sm"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet Test
                  </button>
                );
              }

              return (
                <div className="">
                  {account.address as Address}
                  {chain.name}
                </div>
              )

              // if (chain.unsupported || chain.id !== targetNetwork.id) {
              //   return <WrongNetworkDropdown />;
              // }

              // return (
              //   <>
              //     <div className="flex flex-col items-center mr-1">
              //       <Balance address={account.address as Address} className="min-h-0 h-auto" />
              //       <span className="text-xs" style={{ color: networkColor }}>
              //         {chain.name}
              //       </span>
              //     </div>
              //     <AddressInfoDropdown
              //       address={account.address as Address}
              //       displayName={account.displayName}
              //       ensAvatar={account.ensAvatar}
              //       blockExplorerAddressLink={blockExplorerAddressLink}
              //     />
              //     <AddressQRCodeModal address={account.address as Address} modalId="qrcode-modal" />
              //   </>
              // );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default App
