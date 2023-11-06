import { Pocketbase } from 'pocketbase-react';

const serverURL = import.meta.env.VITE_API_URL;

// * https://github.com/tobicrain/pocketbase-react

export default function PocketbaseWrapper({ children }: React.PropsWithChildren) {
  return (
    <Pocketbase
      serverURL={serverURL}
      initialCollections={['tags', 'news']}
      webRedirectUrl={serverURL}
      mobileRedirectUrl={serverURL}
      openURL={async () => {}}
    >
      {children}
    </Pocketbase>
  );
}
