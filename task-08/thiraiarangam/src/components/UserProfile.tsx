import { useSession } from "next-auth/react";

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.name}</p>
        <p>Email: {session.user?.email}</p>
      </div>
    );
  }

  return <p>Not signed in</p>;
}
