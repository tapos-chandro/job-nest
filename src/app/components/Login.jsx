"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();



  if (status === "loading") return <p>Loading...</p>;




  return (
    <nav>
      {session ? (
        <>
          <p>Hi, {session.user.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => signIn('google')} className="hover:cursor-pointer border-white bg-yellow-500 p-2 px-8 rounded-md">SignIn</button>
      )}
    </nav>
  );
}
