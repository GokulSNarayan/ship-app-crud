import Image from "next/image";
import { Login } from "@/components/login/login";
import containerShip from "../public/unsplash-container-ship.jpg";





export default async function Home() {

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-900">
      {/* <Image src={containerShip} alt="Ship with containers" layout="fill" objectFit="cover" /> */}
      <main className="h-screen max-w-wrapper content-center z-10 isolate">
          <Login />
      </main>
    </div>
  );
}
