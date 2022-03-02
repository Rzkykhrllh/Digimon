import { useRouter } from "next/router";
import React from "react";

function queryType() {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
}

export default queryType;
