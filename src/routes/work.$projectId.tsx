import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "./index";
import { ArrowLeft, ArrowRight, Check, Monitor, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work/$projectId")({
  component: CaseStudyPage,
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw new Error("Project not found");
    return { project };
  },
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData();

  // Mocked details for the case study
  const challenge = "The client needed a modern, trustworthy digital presence that could effectively convert high-value visitors into qualified leads. Their previous website was slow, difficult to navigate on mobile devices, and lacked clear calls to action.";
  const approach = "We took a strategic, content-first approach. By understanding their ideal customer profile, we designed a user journey that builds trust immediately through clean typography, professional imagery, and clear value propositions. The site was built using a modern tech stack to ensure lightning-fast load times and perfect mobile responsiveness.";
  const whatWeBuilt = "A fully custom, responsive website built from the ground up to maximize conversions and establish authority in their industry.";
  const features = [
    "Custom responsive design system",
    "Conversion-optimized landing pages",
    "Lightning-fast page load speeds",
    "Integrated lead capture forms",
    "SEO-optimized architecture",
    "Accessible, mobile-first layouts"
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="border-b border-border bg-card py-6">
        <div className="page-shell flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild className="-ml-4 text-muted-foreground hover:text-foreground">
            <Link to="/">
              <ArrowLeft className="size-4 mr-2" /> Back to Home
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-signal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-signal">
              Concept Project
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="page-shell max-w-4xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[.18em] text-primary">{project.industry}</p>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">{project.title}</h1>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {project.services.map(s => (
              <span key={s} className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="page-shell -mt-12 lg:-mt-20">
        <div className={`aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br ${project.style} shadow-2xl`}>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover mix-blend-overlay opacity-90" />
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="page-shell grid gap-16 lg:grid-cols-[1fr_auto] lg:gap-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-12">{challenge}</p>

            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-12">{approach}</p>

            <h2 className="text-3xl font-bold mb-6">What We Built</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">{whatWeBuilt}</p>
            
            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 grid size-5 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Check className="size-3" />
                  </span>
                  <span className="text-base text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="w-full lg:w-80 space-y-8">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold mb-6">Project Overview</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Industry</p>
                  <p className="text-base font-bold">{project.industry}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Category</p>
                  <p className="text-base font-bold">{project.category}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Live Demo</p>
                  <Button className="w-full" asChild>
                    <a href="#demo" onClick={(e) => { e.preventDefault(); alert("This is a concept demo project."); }}>
                      <Globe className="mr-2 size-4" /> View Live Site
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Previews */}
      <section className="section-pad border-t border-border bg-surface">
        <div className="page-shell">
          <div className="mb-16 text-center">
             <h2 className="text-3xl font-bold sm:text-4xl">Platform Previews</h2>
             <p className="mt-4 text-lg text-muted-foreground">Designed for every screen.</p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-start">
            {/* Desktop Preview */}
            <div className="rounded-xl border border-border bg-card p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Monitor className="size-5" /> <span className="text-sm font-semibold uppercase tracking-wider">Desktop View</span>
              </div>
              <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                 <img src={project.image} alt={`${project.title} Desktop`} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Mobile Preview */}
            <div className="rounded-xl border border-border bg-card p-4 shadow-xl mx-auto w-full max-w-sm">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Smartphone className="size-5" /> <span className="text-sm font-semibold uppercase tracking-wider">Mobile View</span>
              </div>
              <div className="aspect-[9/19] overflow-hidden rounded-[2rem] border-8 border-foreground/10 bg-muted">
                 <img src={project.image} alt={`${project.title} Mobile`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-20">
        <div className="page-shell text-center">
          <h2 className="text-3xl font-bold sm:text-5xl mb-8">Want a website like this?</h2>
          <Button size="xl" asChild>
            <Link to="/#contact">Let's Discuss Your Project <ArrowRight className="ml-2 size-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
