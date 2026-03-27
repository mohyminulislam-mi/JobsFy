import { Suspense } from "react";
import JobsList from "./joblist";
import Loading from "../loading";

export default function JobsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <JobsList />
    </Suspense>
  );
}
