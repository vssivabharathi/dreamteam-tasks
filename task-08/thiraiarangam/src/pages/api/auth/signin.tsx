import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }: { providers: any }) {
  return (
    <div>
      {Object.values(providers).map((provider: any) => (
        <button
          key={provider.name}
          onClick={() => signIn(provider.id)}
        >
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}
