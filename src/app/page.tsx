"use client";

import Image from "next/image";
import { testSkewAction } from "./actions/testSkewAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={async () => {
          const fromServer = await testSkewAction();
          alert(fromServer);
        }}
      >
        Click meee
      </button>
    </main>
  );
}
