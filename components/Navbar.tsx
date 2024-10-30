import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-16 py-4 border-b border-b-[#2D2D2D] shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1>
            <span className="font-bold text-xl">B.</span>
          </h1>
        </Link>
        <div className="flex items-center card-bg px-[12px] py-[6px] rounded-2xl overflow-hidden gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <p className="links">Create</p>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <p className="links">Logout</p>
                </button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <div className="w-8 h-8 overflow-hidden flex items-center justify-center rounded-full">
                  <Image
                    width={50}
                    height={50}
                    src={session.user.image as string}
                    alt="profile-picture"
                  />
                </div>
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
                <button type="submit">
                  {" "}
                  <p className="links">Login</p>
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
