"use client";

import dynamic from "next/dynamic";
import { Layout } from "@/components/primitives";

const Demo = dynamic(() => import("../components/Demo"), {
  ssr: false,
});

const Page = () => {
  return (
    <Layout>
      <Demo />
    </Layout>
  );
};

export default Page;
