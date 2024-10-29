import { Appbar } from "@/components/Appbar";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth"

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}

export default async function Home() {
  const session = await getUser();
  console.log(session);

  return (
    <div className="p-4">
      <Appbar />
      {session ? (
        <>
          <h1 className="text-4xl font-extrabold mt-6 text-blue-600">Welcome, {session.user.name}</h1>
          <p className="text-lg text-gray-700 mt-4">Email: {session.user.email}</p>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-md text-gray-800">You are logged in as {session.user.name} with the email {session.user.email}.</p>
          </div>
        </>
      ) : (
        <p className="text-lg text-gray-700 mt-4">You are not logged in.</p>
      )}
    </div>
  );
}