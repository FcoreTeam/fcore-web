// app/cases/[id]/WorkPageClient.tsx
"use client";

import { useState, useEffect } from "react";
import { works } from "@/components/works/work/works";
import WorkPage from "@/components/works/work-page/Work-page";
import { Project } from "@/types/types";

interface WorkPageClientProps {
  id: string;
}

const WorkPageClient = ({ id }: WorkPageClientProps) => {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Преобразуем ID в число, если в works используются числовые ID
    const numericId = Number(id);
    const foundProject = works.find((item) => item.id === numericId);

    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);

  if (!project) {
    return <div>Загрузка...</div>;
  }

  return <WorkPage {...project} />;
};

export default WorkPageClient;
