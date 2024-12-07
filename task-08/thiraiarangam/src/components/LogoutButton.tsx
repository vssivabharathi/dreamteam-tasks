import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
      Sign Out
    </button>
  );
}
