"use client";

import React from "react";

import { HoverEffect } from "@saasfly/ui/card-hover-effect";

export const projects = [
  {
    title: "Kubernetes",
    description:
      "Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.",
    link: "/",
  },
  {
    title: "DevOps + FinOps",
    description:
      "DevOps is a set of practices that combines software development and IT operations. FinOps is the practice of bringing financial accountability to the variable spend model of cloud.",
    link: "/",
  },
  {
    title: "AI First",
    description:
      "AI-first is a strategy that leverages artificial intelligence to improve products and services.",
    link: "/",
  },
];
export function HoverEffects() {
  return <HoverEffect items={projects} />;
}
