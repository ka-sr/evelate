import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { useState, type FormEvent } from "react";
import {
  ArrowRight, BarChart3, Check, ChevronDown, CircleCheck, Code2, Globe2,
  Instagram, LayoutTemplate, Menu, MessageCircle, MousePointerClick,
  PanelsTopLeft, Search, ShoppingBag, Sparkles, Target, X, Zap, type LucideIcon,
  Utensils, Stethoscope, Building2, Briefcase, Database, Users, Cloud, Store, GraduationCap, Hammer, Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AGENCY = "Elevate Digital";
const nav = ["Home", "Services", "Industries", "About", "Process", "Contact"];

const services: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Website Design & Development", description: "Fast, polished websites built to earn attention and enquiries.", icon: Code2 },
  { title: "Landing Pages", description: "Focused campaign pages that guide visitors toward one clear action.", icon: MousePointerClick },
  { title: "E-commerce Development", description: "Easy-to-manage stores designed for discovery and confident buying.", icon: ShoppingBag },
  { title: "Website Redesign", description: "Modernise your digital presence without losing what already works.", icon: PanelsTopLeft },
  { title: "SEO", description: "Build sustainable search visibility around the services customers need.", icon: Search },
  { title: "Google Ads", description: "Intent-led campaigns with clear tracking and ongoing optimisation.", icon: Target },
  { title: "Social Media Management", description: "Consistent content and community management across key channels.", icon: MessageCircle },
  { title: "Instagram Growth", description: "A practical content system shaped around reach and engagement.", icon: Instagram },
  { title: "Google Business Profile", description: "Improve local visibility, trust signals and customer actions.", icon: Globe2 }
];

const industries: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Restaurants & Hospitality", description: "Modern websites for restaurants, cafés, hotels and hospitality businesses with menus, reservations, locations and mobile-friendly experiences.", icon: Utensils },
  { title: "Pharmacy & Healthcare", description: "Professional websites for pharmacies, clinics and healthcare businesses with services, products, enquiries and appointment-related features.", icon: Stethoscope },
  { title: "Real Estate", description: "Property-focused websites with listings, search/filter functionality, property details, agent information and enquiry forms.", icon: Building2 },
  { title: "E-commerce", description: "Complete online stores with product catalogs, product pages, shopping carts, checkout experiences and responsive mobile shopping.", icon: ShoppingBag },
  { title: "Corporate & Business", description: "Professional websites for companies, agencies, consultants and established businesses with services, about, solutions and contact sections.", icon: Briefcase },
  { title: "ERP & Business Management", description: "Custom ERP and business management systems for managing operations, inventory, sales, employees, reporting and other business processes.", icon: Database },
  { title: "CRM & Sales Management", description: "Custom CRM systems for managing leads, customers, sales pipelines, follow-ups, tasks and sales analytics.", icon: Users },
  { title: "SaaS & Web Applications", description: "Modern SaaS platforms and web applications with dashboards, user management, subscriptions, analytics and custom workflows.", icon: Cloud },
  { title: "Local Business Websites", description: "Modern websites for local businesses such as salons, gyms, repair services, contractors, stores and other service-based businesses.", icon: Store },
  { title: "Education & Coaching", description: "Websites for schools, institutes, coaching businesses, trainers and education platforms with courses, programs, enquiries and registrations.", icon: GraduationCap },
  { title: "Construction & Infrastructure", description: "Professional websites for construction companies, contractors and infrastructure businesses to showcase services, projects and company information.", icon: Hammer },
  { title: "Logistics & Transportation", description: "Websites and custom digital solutions for logistics, transport, delivery and transportation businesses.", icon: Truck }
];

const faqs = [
  ["How much does a website cost?", "Every project is scoped around your goals, content and required functionality. After a short discovery call, we provide a clear proposal with no hidden surprises."],
  ["How long does a website take?", "Most business websites take a few weeks from approved content to launch. A detailed timeline is agreed before work starts."],
  ["Do you work with international clients?", "Yes. Our process is designed for smooth remote collaboration with businesses across the UK, USA, Canada, Australia and beyond."],
  ["Can you redesign my existing website?", "Absolutely. We can audit what is working, improve the structure and create a more modern, conversion-focused experience."],
  ["Do you provide website maintenance?", "Yes. Ongoing plans can cover updates, monitoring, content changes and technical support."],
  ["Do you manage Google Ads?", "Yes. We can plan, launch and optimise search campaigns around measurable business goals."],
  ["Do you manage social media?", "Yes. Support can include strategy, content planning, publishing and ongoing management."],
  ["Can you help improve my Google presence?", "Yes. SEO, Google Business Profile optimisation and Google Ads can work together to improve how customers discover you."],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${AGENCY} | Web Design & Digital Marketing Agency` },
      { name: "description", content: "Premium website development, SEO, Google Ads and social media marketing for ambitious businesses worldwide." },
      { property: "og:title", content: `${AGENCY} | Web Design & Digital Growth` },
      { property: "og:description", content: "Professional websites and digital marketing that help businesses attract customers and grow online." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: AgencyPage,
});

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <a href="#home" className={`flex min-w-0 items-center gap-2 font-display text-sm font-bold ${inverse ? "text-primary-foreground" : "text-foreground"}`}><span className="grid size-8 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><Sparkles className="size-4" /></span><span className="truncate">{AGENCY}</span></a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
    <div className="page-shell grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:grid-cols-[auto_1fr_auto]">
      <Logo />
      <nav aria-label="Primary navigation" className="hidden justify-center gap-7 lg:flex">
        {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item}</a>)}
      </nav>
      <Button asChild className="hidden lg:inline-flex"><a href="#contact">Book a Free Call <ArrowRight /></a></Button>
      <Button type="button" variant="outline" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="page-shell animate-fade-in grid gap-1 border-t border-border py-4 lg:hidden">{nav.map((item) => <a onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-accent">{item}</a>)}<Button asChild className="mt-2"><a href="#contact" onClick={() => setOpen(false)}>Book a Free Call</a></Button></nav>}
  </header>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-primary">{children}</p>; }
function SectionIntro({ eyebrow, title, copy, center = false }: { eyebrow: string; title: string; copy?: string; center?: boolean }) { return <div className={center ? "mx-auto mb-12 max-w-2xl text-center" : "mb-12 max-w-2xl"}><Eyebrow>{eyebrow}</Eyebrow><h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>{copy && <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{copy}</p>}</div>; }

function BrowserVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`elevated overflow-hidden rounded-xl border border-border bg-card ${compact ? "max-w-xl" : "w-full"}`} aria-label="Concept business website preview" role="img">
    <div className="flex h-9 items-center gap-1.5 border-b border-border bg-muted px-4"><span className="size-2 rounded-full bg-destructive/60"/><span className="size-2 rounded-full bg-signal"/><span className="size-2 rounded-full bg-primary/50"/><span className="ml-4 h-4 flex-1 rounded bg-background"/></div>
    <div className="grid min-h-72 grid-cols-5 bg-card p-5 sm:p-8">
      <div className="col-span-3 flex flex-col justify-center"><div className="mb-5 h-2 w-20 rounded bg-primary"/><div className="h-7 w-11/12 rounded bg-ink"/><div className="mt-2 h-7 w-3/4 rounded bg-ink"/><div className="mt-5 h-2 w-4/5 rounded bg-muted-foreground/25"/><div className="mt-2 h-2 w-3/5 rounded bg-muted-foreground/25"/><div className="mt-6 h-9 w-32 rounded bg-primary"/></div>
      <div className="col-span-2 grid place-items-center"><div className="relative aspect-[4/5] w-full max-w-40 overflow-hidden rounded-lg bg-primary"><div className="absolute inset-5 rounded-md border border-primary-foreground/20 bg-primary-foreground/10"/><div className="absolute bottom-5 left-5 right-5 h-12 rounded bg-signal"/></div></div>
    </div>
  </div>;
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border pt-14 sm:pt-20 lg:pt-24">
      <div className="subtle-grid pointer-events-none absolute inset-0 opacity-50"/>
      <div className="page-shell relative grid items-center gap-14 pb-20 lg:grid-cols-[1.1fr_.9fr] lg:pb-24">
        <div className="reveal-up max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <span className="size-2 rounded-full bg-signal"/> Websites. Technology. Growth.
          </div>
          <h1 className="text-4xl font-bold leading-[1.08] text-foreground sm:text-6xl lg:text-7xl">
            Websites & Digital Solutions <span className="text-primary">Built For Growth.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            From business websites and e-commerce to custom software and digital marketing, we build modern solutions designed around your business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild><a href="#contact">Get a Free Website Audit <ArrowRight /></a></Button>
            <Button size="lg" variant="outline" asChild><a href="#services">View Our Services</a></Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <CircleCheck className="size-4 text-primary"/> Helping businesses build a stronger digital presence.
          </p>
        </div>
        
        <div className="float-soft relative mx-auto w-full lg:mx-0">
           <div className="rounded-xl border border-border bg-card p-2 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] object-cover rounded-lg" alt="Premium business website design mockup on laptop screen" />
           </div>
        </div>
      </div>
    </section>
  );
}

function Trust() { 
  return (
    <section className="bg-ink py-16 text-primary-foreground">
      <div className="page-shell">
        <div className="mb-12 text-center reveal-up">
           <p className="font-display text-3xl font-bold">Built for businesses ready to grow.</p>
           <p className="mt-4 text-primary-foreground/60 max-w-2xl mx-auto">Everything you need to scale your digital presence.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-fade-in rounded-xl border border-primary-foreground/10 bg-card p-4 shadow-lg hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0ms' }}>
              <div className="mb-4 h-40 w-full rounded-lg bg-muted overflow-hidden border border-border/50">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-90" alt="Premium website mockup" />
              </div>
              <div className="flex items-center gap-2">
                <LayoutTemplate className="size-5 text-signal" />
                <p className="text-base font-bold text-foreground">Premium Website</p>
              </div>
            </div>
            
            <div className="animate-fade-in rounded-xl border border-primary-foreground/10 bg-card p-4 shadow-lg hover:scale-105 transition-transform duration-300" style={{ animationDelay: '150ms' }}>
              <div className="mb-4 h-40 w-full rounded-lg bg-muted overflow-hidden border border-border/50">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-90" alt="Mobile website" />
              </div>
              <div className="flex items-center gap-2">
                <svg className="size-5 text-signal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                <p className="text-base font-bold text-foreground">Mobile Website</p>
              </div>
            </div>

            <div className="animate-fade-in rounded-xl border border-primary-foreground/10 bg-card p-4 shadow-lg hover:scale-105 transition-transform duration-300" style={{ animationDelay: '300ms' }}>
              <div className="mb-4 h-40 w-full rounded-lg bg-muted overflow-hidden border border-border/50">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-90" alt="Growth Analytics" />
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="size-5 text-signal shrink-0" />
                <p className="text-base font-bold text-foreground">Growth Analytics</p>
              </div>
            </div>
            
            <div className="animate-fade-in rounded-xl border border-primary-foreground/10 bg-card p-4 shadow-lg hover:scale-105 transition-transform duration-300" style={{ animationDelay: '450ms' }}>
              <div className="mb-4 h-40 w-full rounded-lg bg-muted overflow-hidden border border-border/50">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-90" alt="Marketing Dashboard" />
              </div>
              <div className="flex items-center gap-2">
                <PanelsTopLeft className="size-5 text-signal shrink-0" />
                <p className="text-base font-bold text-foreground">Marketing Dashboard</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  ); 
}

function Services() { return <section id="services" className="section-pad"><div className="page-shell"><SectionIntro center eyebrow="Full-service digital partner" title="Everything You Need to Grow Online" copy="From a high-converting website to ongoing digital marketing, we help businesses build and grow their online presence."/><div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{services.map(({title,description,icon:Icon}) => <article key={title} className="group bg-card p-6 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 hover:bg-accent/70 hover:shadow-xl"><div className="mb-8 grid size-11 place-items-center rounded-md bg-secondary text-primary transition-transform group-hover:-translate-y-1"><Icon className="size-5"/></div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{description}</p><a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></a></article>)}</div></div></section>; }

function Featured() { return <section className="section-pad overflow-hidden bg-ink text-primary-foreground"><div className="page-shell grid items-center gap-14 lg:grid-cols-2"><div><Eyebrow>Our core expertise</Eyebrow><h2 className="text-3xl font-bold leading-tight sm:text-5xl">Website Design & Development</h2><p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/65">We don't just build websites. We create digital experiences designed to turn visitors into customers.</p><ul className="my-8 grid gap-4">{["Mobile-first design", "Fast & modern technology", "Conversion-focused layouts"].map((x)=><li key={x} className="flex items-center gap-3 font-semibold"><span className="grid size-6 place-items-center rounded-full bg-signal text-signal-foreground"><Check className="size-4"/></span>{x}</li>)}</ul><Button variant="signal" size="lg" asChild><a href="#contact">Start Your Website Project <ArrowRight/></a></Button></div><div className="lg:translate-x-10 relative"><div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-primary-foreground/10 bg-muted shadow-2xl"><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" alt="Technology and Coding" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" /></div></div></div></section>; }

function WhatWeBuild() {
  return (
    <section id="industries" className="section-pad bg-surface border-y border-border">
      <div className="page-shell">
        <SectionIntro 
          center
          eyebrow="What We Build" 
          title="Digital Solutions for Every Industry" 
          copy="From business websites to custom software, we build modern digital solutions tailored to your business and industry." 
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="mb-5 grid size-10 place-items-center rounded-md bg-secondary text-primary transition-transform group-hover:scale-110">
                <Icon className="size-5" />
              </div>
              <h3 className="text-base font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
           <h3 className="text-2xl font-bold mb-3">Have a different idea?</h3>
           <p className="text-muted-foreground mb-8 text-base">Tell us what you need — we can build a solution around your business.</p>
           <Button size="lg" asChild><a href="#contact">Discuss Your Project <ArrowRight className="ml-2 size-4" /></a></Button>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type="text", required=false, placeholder, maxLength=120 }: { label:string; name:string; type?:string; required?:boolean; placeholder?:string; maxLength?:number }) { return <label className="grid gap-2 text-sm font-semibold">{label}{required && <span className="sr-only"> required</span>}<input className="h-11 rounded-md border border-input bg-background px-3 font-normal outline-none transition focus:border-primary" name={name} type={type} required={required} placeholder={placeholder} maxLength={maxLength}/></label>; }
function SelectField({label,name,options}:{label:string;name:string;options:string[]}) { return <label className="grid gap-2 text-sm font-semibold">{label}<select name={name} required className="h-11 rounded-md border border-input bg-background px-3 font-normal outline-none focus:border-primary"><option value="">Select an option</option>{options.map(o=><option key={o}>{o}</option>)}</select></label>; }

const sendEmailFn = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    business: string;
    email: string;
    phone?: string;
    website?: string;
    service?: string;
    budget?: string;
    message: string;
    type: "audit" | "contact";
  }) => data)
  .handler(async ({ data }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }

    const { name, business, email, phone, website, service, budget, message, type } = data;

    const htmlBody = `
      <h2>New project inquiry received from Elevate Digital website.</h2>
      <p><strong>Type:</strong> ${type === "audit" ? "Free Website Audit Request" : "Contact Inquiry"}</p>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Business Name:</strong> ${business}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
      ${service ? `<p><strong>Service Required:</strong> ${service}</p>` : ""}
      ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `;

    try {
      const res = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["kamalbhagat882@gmail.com"],
        subject: "New Project Inquiry – Elevate Digital",
        html: htmlBody,
      });

      if (res.error) {
         console.error("Resend API Error:", res.error);
         throw new Error(res.error.message);
      }
      return { success: true };
    } catch (error) {
      console.error("Email sending failed:", error);
      throw new Error("Failed to send email");
    }
  });

function useFormSubmit(type: "audit" | "contact") { 
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle"); 
  const [errorMessage, setErrorMessage] = useState("");
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (!e.currentTarget.checkValidity()) return;
    
    const form = e.currentTarget;
    setStatus("loading");
    setErrorMessage("");
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      business: formData.get("business") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      website: formData.get("website") as string,
      service: formData.get("service") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
      type
    };

    try {
      await sendEmailFn({ data });
      setStatus("success");
      form.reset();
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message || "Failed to send email");
      setStatus("error");
    }
  }; 
  return { status, submit, errorMessage }; 
}

function Audit() { const {status,submit,errorMessage}=useFormSubmit("audit"); return <section id="audit" className="section-pad"><div className="page-shell overflow-hidden rounded-xl bg-primary text-primary-foreground"><div className="grid lg:grid-cols-[.9fr_1.1fr]"><div className="p-8 sm:p-12"><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-primary-foreground/65">Complimentary website review</p><h2 className="text-3xl font-bold leading-tight sm:text-5xl">Not Sure If Your Website Is Costing You Customers?</h2><p className="mt-5 max-w-xl text-primary-foreground/75">We'll review your website and show you opportunities to improve design, mobile experience, performance and conversions.</p><div className="mt-10 flex items-center gap-3 text-sm font-semibold"><Search className="size-5"/> Clear, practical feedback. No obligation.</div></div><form onSubmit={submit} className="m-2 rounded-lg bg-card p-6 text-card-foreground sm:m-4 sm:p-8">{status === "success" ? <Success title="Thank you!" text="Your inquiry has been received. We'll get back to you shortly."/> : <div className="grid gap-4"><div className="grid gap-4 sm:grid-cols-2"><Field label="Name" name="name" required/><Field label="Business Name" name="business" required/></div><Field label="Website URL" name="website" type="url" required placeholder="https://"/><Field label="Email" name="email" type="email" required/><label className="grid gap-2 text-sm font-semibold">Message<textarea name="message" maxLength={1000} rows={3} className="rounded-md border border-input bg-background p-3 font-normal outline-none focus:border-primary"/></label>{status === "error" && <p className="text-sm font-semibold text-destructive">{errorMessage}</p>}<Button size="lg" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Get a Free Website Audit"} <ArrowRight/></Button></div>}</form></div></div></section>; }
function Success({title,text}:{title:string;text:string}) { return <div role="status" className="grid min-h-72 place-items-center text-center"><div><span className="mx-auto grid size-14 place-items-center rounded-full bg-signal text-signal-foreground"><Check className="size-7"/></span><h3 className="mt-5 text-2xl font-bold">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{text}</p></div></div>; }

function Why() { const items=[[LayoutTemplate,"Modern & conversion-focused"],[PanelsTopLeft,"Mobile-first approach"],[MessageCircle,"Transparent communication"],[Zap,"Fast turnaround"],[BarChart3,"Scalable solutions"],[CircleCheck,"Ongoing support"]] as const; return <section className="section-pad"><div className="page-shell"><SectionIntro center eyebrow="A better agency experience" title={`Why Businesses Choose ${AGENCY}`}/><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{items.map(([Icon,title])=><div key={title} className="flex gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-5"/></span><div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Practical thinking, thoughtful execution and a clear focus on your business goals.</p></div></div>)}</div></div></section>; }

function Process() { const steps=[["01","Discover","Understand your business, audience and goals."],["02","Strategy","Plan the structure, content and digital strategy."],["03","Build","Design, develop and test the website."],["04","Launch & Grow","Launch the project and support ongoing growth."]]; return <section id="process" className="section-pad border-y border-border bg-surface"><div className="page-shell"><SectionIntro eyebrow="Simple, collaborative process" title="From First Conversation to Growth"/><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">{steps.map(([no,title,copy])=><article key={no} className="relative bg-card p-6"><span className="font-display text-4xl font-bold text-primary/20">{no}</span><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></section>; }

function Value() { const values=[["ATTRACT","Get discovered by potential customers.",Search],["ENGAGE","Create a strong first impression.",Sparkles],["CONVERT","Turn website visitors into leads and customers.",Target]] as const; return <section className="section-pad bg-ink text-primary-foreground"><div className="page-shell"><SectionIntro eyebrow="Built around outcomes" title="More Than Just a Website"/><div className="grid gap-4 lg:grid-cols-3">{values.map(([title,copy,Icon],i)=><article key={title} className="border-t border-primary-foreground/20 py-8 lg:px-7"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[.2em] text-signal">{title}</span><Icon className="size-5 text-primary-foreground/40"/></div><p className="mt-10 font-display text-2xl font-semibold leading-snug">{copy}</p><span className="mt-8 block text-xs text-primary-foreground/35">0{i+1}</span></article>)}</div></div></section>; }

function WhyChooseUs() { 
  const cards = [
    { title: "Built Around Your Business", copy: "Every project is tailored to your business, audience and goals — not built from a one-size-fits-all template.", icon: Target },
    { title: "Modern & Responsive", copy: "Fast, professional and mobile-friendly websites designed to deliver a great experience on every device.", icon: LayoutTemplate },
    { title: "Website to Digital Growth", copy: "From websites and e-commerce to SEO, Google Ads and digital solutions, we help businesses build and grow online.", icon: BarChart3 },
    { title: "Direct & Clear Communication", copy: "Work directly with our team with clear communication, transparent planning and support throughout the project.", icon: MessageCircle }
  ];

  return (
    <section className="section-pad">
      <div className="page-shell">
        <SectionIntro 
          center 
          eyebrow="Why Businesses Choose Elevate Digital" 
          title="More than just a website — we build digital solutions around your business goals." 
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map(({title, copy, icon: Icon}) => (
            <article key={title} className="group rounded-xl border border-border bg-card p-8 shadow-sm hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6 grid size-12 place-items-center rounded-md bg-secondary text-primary transition-transform group-hover:scale-110">
                <Icon className="size-6" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
           <h3 className="text-2xl font-bold mb-3">Ready to Build Something Better?</h3>
           <p className="text-muted-foreground mb-8 text-base">Tell us about your business and what you want to achieve.</p>
           <Button size="lg" asChild><a href="#contact">Start a Conversation <ArrowRight className="ml-2 size-4" /></a></Button>
        </div>
      </div>
    </section>
  );
}

function About() { return <section id="about" className="section-pad border-y border-border bg-surface"><div className="page-shell grid gap-12 lg:grid-cols-2 lg:items-center"><div><SectionIntro eyebrow="About us" title="Digital Solutions Built Around Your Business" copy={`${AGENCY} is a digital and IT agency helping ambitious businesses improve their websites and online presence.`}/><Button size="lg" asChild><a href="#contact">Let's Work Together <ArrowRight/></a></Button></div><div className="grid gap-3 sm:grid-cols-2">{["Understanding business goals","Creating custom solutions","Building long-term partnerships","Delivering practical digital growth"].map((x,i)=><div key={x} className="rounded-lg border border-border bg-card p-6"><span className="font-display text-sm font-bold text-primary">0{i+1}</span><h3 className="mt-10 text-lg font-bold">{x}</h3></div>)}</div></div></section>; }

function FAQ() { const [open,setOpen]=useState<number|null>(0); return <section className="section-pad"><div className="page-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><SectionIntro eyebrow="Common questions" title="What You May Want to Know" copy="A few straightforward answers before we start a conversation."/><div className="divide-y divide-border border-y border-border">{faqs.map(([q,a],i)=><div key={q}><Button variant="ghost" className="h-auto w-full justify-between whitespace-normal rounded-none px-0 py-5 text-left text-base" onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}>{q}<ChevronDown className={`shrink-0 transition-transform ${open===i?"rotate-180":""}`}/></Button>{open===i&&<p className="pb-5 pr-8 text-sm leading-7 text-muted-foreground">{a}</p>}</div>)}</div></div></section>; }

function FinalCTA() { return <section className="px-4 pb-8"><div className="mx-auto max-w-[76rem] rounded-xl bg-signal p-8 text-signal-foreground sm:p-14 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500"><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em]">Your next step</p><h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-5xl">Ready to Build a Better Digital Presence?</h2><p className="mt-4 max-w-xl text-signal-foreground/75">Tell us about your business and let's discuss how we can help you grow online.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button size="lg" variant="secondary" className="hover:scale-105 transition-transform shadow-lg" asChild><a href="#contact">Book a Free Call</a></Button></div></div></div></section>; }

function Contact() { const {status,submit,errorMessage}=useFormSubmit("contact"); return <section id="contact" className="section-pad bg-ink text-primary-foreground"><div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><Eyebrow>Start a conversation</Eyebrow><h2 className="text-3xl font-bold sm:text-5xl">Tell Us What You're Building.</h2><p className="mt-5 text-primary-foreground/65">Share a few details and we'll discuss the most practical next step for your business.</p><div className="mt-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-signal">Founder</p><p className="mt-2 font-display text-xl font-bold">Kamal Bhagat</p></div><div className="mt-6 grid gap-5 text-sm"><p><span className="block text-primary-foreground/45">Email</span><a className="font-semibold transition-colors hover:text-signal" href="mailto:kamalbhagat882@gmail.com">kamalbhagat882@gmail.com</a></p><p><span className="block text-primary-foreground/45">Mobile & WhatsApp</span><a className="font-semibold transition-colors hover:text-signal" href="tel:+919782608189">+91 97826 08189</a></p><p><span className="block text-primary-foreground/45">Location</span><span className="font-semibold">Serving clients worldwide</span></p></div></div><form onSubmit={submit} className="rounded-lg bg-card p-6 text-card-foreground sm:p-8">{status === "success" ? <Success title="Thank you!" text="Your inquiry has been received. We'll get back to you shortly."/> : <div className="grid gap-4"><div className="grid gap-4 sm:grid-cols-2"><Field label="Full Name" name="name" required/><Field label="Business Name" name="business" required/><Field label="Email" name="email" type="email" required/><Field label="Phone" name="phone" type="tel" maxLength={30}/><Field label="Website" name="website" type="url" placeholder="https://"/><SelectField label="Service Required" name="service" options={["Website","Landing Page","E-commerce","SEO","Google Ads","Social Media","Website Redesign","Other"]}/><SelectField label="Budget" name="budget" options={["Under $300","$300–$500","$500–$1,000","$1,000+"]}/></div><label className="grid gap-2 text-sm font-semibold">Message<textarea name="message" required maxLength={1500} rows={5} className="rounded-md border border-input bg-background p-3 font-normal outline-none focus:border-primary"/></label>{status === "error" && <p className="text-sm font-semibold text-destructive">{errorMessage}</p>}<Button type="submit" size="lg" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Start Your Project"} <ArrowRight/></Button></div>}</form></div></section>; }

function Footer() { return <footer className="border-t border-primary-foreground/10 bg-ink py-12 text-primary-foreground"><div className="page-shell"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><Logo inverse/><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/50">Websites, technology & digital growth for ambitious businesses.</p><p className="mt-4 text-sm font-semibold">Founded by Kamal Bhagat</p></div><FooterList title="Quick Links" links={nav}/><FooterList title="Services" links={["Website Development","SEO","Google Ads","Social Media","E-commerce"]}/><FooterList title="Social" links={["Instagram","LinkedIn","Facebook"]}/></div><div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/40 sm:flex-row sm:justify-between"><span>© 2026 {AGENCY}. All rights reserved.</span><span>kamalbhagat882@gmail.com · +91 97826 08189</span></div></div></footer>; }
function FooterList({title,links}:{title:string;links:string[]}) { return <div><h3 className="text-sm font-bold">{title}</h3><ul className="mt-4 grid gap-3">{links.map(x=><li key={x}><a href={nav.includes(x)?`#${x.toLowerCase()}`:"#contact"} className="text-sm text-primary-foreground/50 hover:text-primary-foreground">{x}</a></li>)}</ul></div>; }

function AgencyPage() { return <><Navbar/><main><Hero/><Trust/><Services/><Featured/><WhatWeBuild/><Why/><Process/><WhyChooseUs/><About/><FAQ/><FinalCTA/><Contact/></main><Footer/></>; }
