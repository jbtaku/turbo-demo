"use client";

import React, { useEffect, useState } from "react";
import { client } from "../lib/hono";
import { Prefecture } from "backend/src/lib/prisma";

function Page() {
  /* const res = await client.index.$post({
    json: { name: "test", prefectureId: "idTestooo" },
  }); */
  const [data, setData] = useState<
    {
      id: number;
      prefectureId: string;
      name: string;
    }[]
  >();
  useEffect(() => {
    (async () => {
      const res = await client.index.$get();
      const data = await res.json();
      setData(data);
    })();
  });

  return <div>{data?.map((item) => <p key={item.id}>{item.name}</p>)}</div>;
}

export default Page;
