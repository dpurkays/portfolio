import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProjectDetails from "@/app/components/ProjectDetails";
import { projectNavItems } from "@/constants/NavItems";
import { projectList } from "@/constants/ProjectList";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectList.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Dula Purkaystha",
      description:
        "The project you're looking for does not exist on this portfolio.",
    };
  }

  return {
    title: `${project.title} | Dula Purkaystha`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Dula Purkaystha`,
      description: project.description,
      url: `https://dula-purkaystha.vercel.app/projects/${slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} preview image`,
        },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectList.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
      <Header navItems={projectNavItems} />
      <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-center px-4 py-20">
        <ProjectDetails {...project} />
      </main>
      <Footer navItems={projectNavItems} />
    </>
  );
}
