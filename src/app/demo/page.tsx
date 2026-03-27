"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DemoPage = () => {
  const [blockLoading, setBlockLoading] = useState(false);
  const [backgroundLoading, setBackgroundLoading] = useState(false);
  const handleBlocking = async () => {
    setBlockLoading(true);
    await fetch("/api/demo/blocking", { method: "POST" });
    setBlockLoading(false);
  };
  const handleBackground = async () => {
    setBackgroundLoading(true);
    await fetch("/api/demo/background", { method: "POST" });
    setBackgroundLoading(false);
  };
  return (
    <div>
      <Button onClick={handleBlocking} disabled={blockLoading}>
        {blockLoading ? "Loading" : "Blocking"}
      </Button>
      <Button onClick={handleBackground} disabled={backgroundLoading}>
        {backgroundLoading ? "Loading" : "Background"}
      </Button>
    </div>
  );
};

export default DemoPage;
