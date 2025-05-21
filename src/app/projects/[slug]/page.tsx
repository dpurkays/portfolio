import Header from "@/app/components/Header";
import ProjectDetails from "@/app/components/ProjectDetails";
import { homeNavItems } from "@/constants/NavItems";
import { projectList } from "@/constants/ProjectList";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = projectList.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
      <Header navItems={homeNavItems} />
      <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-center px-4">
        <ProjectDetails {...project} />
      </main>
    </>
  );
}
