"use client"

import { Button } from "@workspace/ui/components/button"
import { api } from "@workspace/backend/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const data = useQuery(api.functions.getMany);
  const add = useMutation(api.functions.add);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">apps/web</h1>
        <Button size="sm" onClick={() => add({})}>Add</Button>
        <div className="text-sm max-w-md w-full">{JSON.stringify(data, null, 2)}</div>
      </div>
    </div>
  )
}
