"use client";

import { DNA } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
      />

    </div>
  );
}