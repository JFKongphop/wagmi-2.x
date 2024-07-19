import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { useEthersSigner } from './hook/useEtherSigner';
import { useEffect } from 'react';
import { useCalendarContract } from './hook/useCalendarContract';

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
