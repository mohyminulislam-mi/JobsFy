import { Suspense } from "react";
import JobsList from "./joblist";


export default function JobsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      < JobsList />
    </Suspense>
  )
}