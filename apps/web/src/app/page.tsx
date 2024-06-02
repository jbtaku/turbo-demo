import React from "react";
import { client } from "../lib/hono";

export const runtime = "edge"
export const fetchCache = "default-no-store";

async function Page() {
  /* await client.index.$post({
    json: { name: "bio", prefectureId: "idTestooo" },
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
