// app/cases/[id]/page.tsx
import { works } from "@/components/works/work/works";
import WorkPageClient from "./workPageClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CasePage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const project = works.find((work) => work.id.toString() === id);

  if (!project) {
    notFound();
  }

  return <WorkPageClient id={id} />;
}
