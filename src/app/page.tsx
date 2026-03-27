"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const projects = useQuery(api.projects.get);
  return <div>{JSON.stringify(projects)}</div>;
}
