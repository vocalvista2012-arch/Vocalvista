import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Mic, Music2, Headphones, Disc3, Video, Presentation, Image as ImageIcon,
  Palette, Radio, Sparkles, Phone, Mail, MessageCircle, Youtube, Instagram,
  ArrowRight, CheckCircle2, XCircle, Menu, X,
} from "lucide-react";
import logo from "@/assets/vocalvista-logo.png.asset.json";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

// ---- Data ------------------------------------------------------------------
const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Coupon Codes", href: "#coupons" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: Mic, title: "Singing", desc: "Studio-grade vocal performance and covers with pro polish." },
  { icon: Music2, title: "Music Production", desc: "Original tracks, beats and arrangements across genres." },
  { icon: Headphones, title: "Audio Editing", desc: "Clean mixing, mastering and podcast-ready sound." },
  { icon: Disc3, title: "Remix Production", desc: "Fresh remixes that reimagine your favourite tracks." },
  { icon: Video, title: "Video Editing", desc: "Cinematic edits, reels and long-form video for creators." },
  { icon: Presentation, title: "PPT Making", desc: "Modern, animated presentations that command attention." },
  { icon: ImageIcon, title: "Thumbnail Design", desc: "Scroll-stopping YouTube thumbnails that convert clicks." },
  { icon: Palette, title: "Logo Design", desc: "Distinctive brand identities with a modern edge." },
  { icon: Radio, title: "Voice Over", desc: "Warm, professional voice overs for ads, videos and IVR." },
  { icon: Sparkles, title: "AI Content Creation", desc: "AI-powered scripts, visuals and content workflows." },
];

const PORTFOLIO = [
  { img: p1, title: "Neon Studio Sessions", tag: "Music Production", desc: "Full production for an indie EP — mixing, mastering and vocal layering." },
  { img: p2, title: "Cinematic Reel Cut", tag: "Video Editing", desc: "High-energy YouTube reel with color grading and sound design." },
  { img: p3, title: "Click-Magnet Thumbnails", tag: "Thumbnail Design", desc: "Series of thumbnails that doubled click-through rate." },
  { img: p4, title: "Brand Identity System", tag: "Logo Design", desc: "Modern logo, palette and usage system for a creator label." },
];

const COUPONS: Record<string, string> = {
  VOCAL10: "10% off any service",
  VISTA25: "25% off your first order",
  LAUNCH50: "Special launch offer — 50% off",
};

function Index() {
  return (
    <div id="home" className="relative min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Coupons />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo.url} alt="VocalVista logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="text-lg font-bold gradient-text">VocalVista</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden lg:inline-flex btn-neon items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold">
            Hire Us <ArrowRight className="h-4 w-4" />
          </a>
          <button aria-label="Toggle menu" className="lg:hidden rounded-lg p-2 text-foreground hover:bg-white/10" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="glass mt-2 rounded-2xl p-3 lg:hidden animate-rise">
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-5xl px-4 text-center">
        <img src={logo.url} alt="VocalVista logo" width={160} height={160} className="mx-auto mb-8 h-32 w-32 animate-float object-contain sm:h-40 sm:w-40" />
        <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground animate-rise">
          ✨ Your Voice, Our Vision
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl md:text-7xl animate-rise">
          Welcome to <span className="gradient-text animate-gradient">VocalVista</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg animate-rise">
          Professional Digital & Creative Services — crafted for creators, brands and dreamers.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3 animate-rise">
          <a href="#services" className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function About() {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="About" title="Creativity engineered for impact" />
        <div ref={ref} className={`glass mx-auto max-w-4xl rounded-3xl p-8 sm:p-12 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            VocalVista is a modern creative studio delivering high-quality digital services for
            <span className="text-foreground"> students, creators, YouTubers, businesses and artists</span>.
            From studio-grade music production and cinematic video editing to standout thumbnails,
            logos and AI-powered content, we combine craft, technology and taste to help your work
            look, sound and perform its very best.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Services" title="What we craft" desc="Ten specialist services under one roof." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 60} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, delay }: { icon: typeof Mic; title: string; desc: string; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.62_0.26_300/60%)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div aria-hidden className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.55 0.26 300 / 30%), transparent 70%)" }} />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Portfolio" title="Selected work" desc="A glimpse of the projects we've helped bring to life." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((p, i) => <PortfolioCard key={p.title} {...p} delay={i * 80} />)}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ img, title, tag, desc, delay }: { img: string; title: string; tag: string; desc: string; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <article ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`glass group overflow-hidden rounded-2xl transition-all duration-700 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">{tag}</span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}

function Coupons() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);
  const list = useMemo(() => Object.keys(COUPONS), []);

  const apply = (e: React.FormEvent) => {
    e.preventDefault();
    const key = code.trim().toUpperCase();
    if (!key) return setStatus({ ok: false, msg: "Please enter a coupon code." });
    if (COUPONS[key]) return setStatus({ ok: true, msg: `Success! ${COUPONS[key]} applied.` });
    setStatus({ ok: false, msg: "Invalid coupon code. Please try again." });
  };

  return (
    <section id="coupons" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="Coupon Codes" title="Save on your next project" desc="Have a promo code? Apply it below to unlock your discount." />
        <div className="glass rounded-3xl p-6 sm:p-10">
          <form onSubmit={apply} className="flex flex-col gap-3 sm:flex-row">
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter coupon code (e.g. VOCAL10)" className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40" aria-label="Coupon code" />
            <button type="submit" className="btn-neon inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              Apply Coupon <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          {status && (
            <div role="status" className={`animate-rise mt-5 flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${status.ok ? "bg-emerald-500/10 text-emerald-300 border border-emerald-400/30" : "bg-red-500/10 text-red-300 border border-red-400/30"}`}>
              {status.ok ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              {status.msg}
            </div>
          )}
          <p className="mt-6 text-xs text-muted-foreground">
            Try one of: {list.map((c, i) => <span key={c}><button type="button" onClick={() => setCode(c)} className="text-foreground underline underline-offset-2 hover:text-primary">{c}</button>{i < list.length - 1 ? ", " : ""}</span>)}
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: "+91 6239191622", href: "tel:+916239191622" },
    { icon: Mail, label: "Email", value: "hello@vocalvista.com", href: "mailto:hello@vocalvista.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/916239191622" },
    { icon: Youtube, label: "YouTube", value: "@VocalVista", href: "#" },
    { icon: Instagram, label: "Instagram", value: "@VocalVista", href: "#" },
  ];
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader eyebrow="Contact" title="Let's create together" desc="Reach out through any of these channels — we usually reply within a few hours." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => <ContactCard key={it.label} {...it} delay={i * 60} />)}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href, delay }: { icon: typeof Phone; label: string; value: string; href: string; delay: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <a ref={ref} href={href} style={{ transitionDelay: `${delay}ms` }} className={`glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_oklch(0.62_0.26_300/60%)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-semibold">{value}</div>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <img src={logo.url} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          <span className="text-sm font-semibold gradient-text">VocalVista</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 VocalVista. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
