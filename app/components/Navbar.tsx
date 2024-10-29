import { auth, signIn, signOut } from "@/auth";

import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-[#2D2D2D] shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1>
            <span className="font-bold text-xl">B.</span>
          </h1>
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">Create</Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                {session.user.name}
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit">Login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
