import React from "react";
import { client } from "../lib/hono";

export const dynamic = "force-dynamic"

async function Page() {
  /* const res = await client.index.$post({
    json: { name: "test", prefectureId: "idTestooo" },
  }); */
  const res = await client.index.$get();
  const data = await res.json();
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Page;
