import { Pocketbase } from 'pocketbase-react';

const serverURL = import.meta.env.VITE_API_URL;
const collections = ['users', 'COLLECTION_NAME_02'];

// * https://github.com/tobicrain/pocketbase-react

export default function PocketbaseWrapper({ children }: React.PropsWithChildren) {
  return (
    <Pocketbase
      serverURL={serverURL}
      initialCollections={collections}
      webRedirectUrl={serverURL}
      mobileRedirectUrl={serverURL}
      openURL={async () => {}}
    >
      {children}
    </Pocketbase>
  );
}
