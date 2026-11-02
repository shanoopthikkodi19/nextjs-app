import Image from "next/image";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certification", href: "#certification" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "10", label: "Years in IT since 2016" },
  { value: "5", label: "Years in government/defense IT" },
  { value: "2", label: "Live deployed projects" },
  { value: "RHCSA", label: "Red Hat certified" },
];

const skills = [
  {
    title: "Linux administration",
    items: ["RHEL 9", "AlmaLinux", "SELinux", "systemd", "Users & permissions", "Patching & upgrades", "Troubleshooting"],
  },
  {
    title: "Automation & scripting",
    items: ["Ansible", "Bash scripting", "Git"],
  },
  {
    title: "Containers & CI/CD",
    items: ["Docker (multi-stage builds)", "Podman", "GitHub Actions", "GitHub Container Registry"],
  },
  {
    title: "Web servers & security",
    items: ["Nginx", "Apache", "Plesk", "cPanel/WHM", "Reverse proxy", "TLS/SSL (Let's Encrypt)", "Firewall", "PHP"],
  },
  {
    title: "Networking",
    items: ["TCP/IP", "DNS", "DHCP", "LAN/WAN troubleshooting", "AWS Security Groups", "Windows Firewall"],
  },
  {
    title: "Cloud & directory services",
    items: ["AWS EC2", "Google Cloud", "Google Workspace", "Microsoft 365", "Windows Server 2022", "Active Directory", "AD Certificate Services", "PowerShell"],
  },
  {
    title: "Applications & support",
    items: ["Magento", "WordPress & MariaDB migration", "Next.js deployment", "Email & domain migration", "Documentation"],
  },
];

const certification = {
  short: "RHCSA",
  name: "Red Hat Certified System Administrator",
  issuer: "Red Hat",
  issued: "September 2026",
  expires: "September 2029",
  id: "260-112-974",
  verifyUrl: "https://rhtapps.redhat.com/verify?certId=260-112-974",
  covers: [
    "User & permission management",
    "systemd services",
    "SELinux",
    "Networking",
    "Storage & file systems",
    "Software management",
  ],
};

const projects = [
  {
    title: "Next.js on AWS EC2 with Podman, Plesk/nginx & CI/CD",
    tag: "Live on shanoop.in",
    links: [
      { label: "shanoop.in", href: "https://shanoop.in" },
      { label: "GitHub", href: "https://github.com/shanoopthikkodi19/nextjs-app" },
    ],
    points: [
      "Provisioned an AWS EC2 Linux server and deployed a containerised Next.js site (multi-stage Dockerfile) on Podman, restarting on boot via systemd.",
      "Built a GitHub Actions pipeline that builds the image on every push to main and publishes it to GHCR, keeping builds off the low-memory server.",
      "Configured a Plesk/nginx reverse proxy with the container bound to localhost, secured with Let's Encrypt TLS/SSL and working auto-renewal.",
      "Hardened the server with SELinux booleans, AWS Security Group rules (public 80/443, restricted SSH/admin), firewall and swap space.",
      "Fixed production issues: memory freezes, nginx duplicate-location errors, failed certificate validation and blocked outbound traffic.",
    ],
  },
  {
    title: "Windows Server deployment: Active Directory, DNS & DHCP",
    tag: "Client project",
    links: [{ label: "GitHub", href: "https://github.com/shanoopthikkodi19/windows-server-deployment" }],
    points: [
      "Deployed Windows Server 2022 with one Domain Controller managing 4 users across two Organizational Units.",
      "Configured AD, DNS (with forwarding to the router) and DHCP to connect and manage client workstations.",
      "Set up AD Certificate Services with PowerShell as an Enterprise Root CA and issued certificates for web servers, OUs and users.",
      "Applied firewall rules between departments and wrote step-by-step deployment guides.",
    ],
  },
];

const experience = [
  {
    role: "Freelance Cloud & Linux Engineer",
    org: "Upwork & Direct Clients",
    period: "2026 – Present",
    place: "Remote",
    points: [
      "Migrated a business's Microsoft 365 environment (mailboxes, SharePoint, OneDrive), email hosting and domain to Google Workspace.",
      "Moved a WordPress site and its MariaDB database from an AWS AlmaLinux server to a Google Cloud AlmaLinux server running cPanel.",
      "Delivered yellowfintours.in: AWS EC2 server, containerised Next.js site and a GitHub Actions CI/CD pipeline.",
    ],
  },
  {
    role: "Trainee, RHCSA",
    org: "COSS India",
    period: "12 Jun 2026 – 8 Jul 2026",
    place: "Kozhikode",
    points: [
      "Intensive hands-on RHEL training: users and permissions, systemd, SELinux, networking and software management.",
    ],
  },
  {
    role: "Website Manager (IT & Website Support)",
    org: "Naval Ship Repair Yard",
    period: "Feb 2021 – Apr 2026",
    place: "Port Blair, Andaman and Nicobar Islands",
    points: [
      "Published and updated website content and configurations, resolving routine IT and website support requests on time.",
      "Diagnosed content, access and configuration issues in a government/defense IT environment.",
      "Coordinated with internal teams and stakeholders and documented updates, issues and fixes.",
      "Performed routine maintenance, monitoring and troubleshooting to keep systems available.",
    ],
  },
  {
    role: "Junior Programmer",
    org: "Kannur University",
    period: "Nov 2019 – Dec 2020",
    place: "Kozhikode, Kerala",
    points: [
      "Developed and supported the Certificate Verification & Equivalency Platform for learners across India.",
      "Implemented the candidate workflow (instructions, applications, certificate submission) and resolved live issues.",
    ],
  },
  {
    role: "Programmer (Course Implementation & Portal Support)",
    org: "Kannur University UGC Department",
    period: "",
    place: "",
    points: [
      "Set up and ran online UGC courses such as the Faculty Induction Programme on existing learning platforms.",
      "Handled enrolment, access and content, and supported participants across concurrent programmes.",
    ],
  },
  {
    role: "Magento / WordPress Developer",
    org: "Seamedia E-commerce Solutions",
    period: "Sep 2016 – Nov 2017",
    place: "Kozhikode, Kerala",
    points: [
      "Installed, configured and maintained Magento and WordPress on Linux hosting.",
      "Administered Apache and Nginx, including PHP configuration, and handled updates and troubleshooting.",
    ],
  },
];

const education = [
  { title: "Master of Computer Application (MCA)", school: "Calicut University", year: "2016" },
  { title: "BSc Mathematics", school: "Calicut University", year: "2013" },
];

const contactLinks = [
  { label: "Email", value: "shanoopthikkodi@gmail.com", href: "mailto:shanoopthikkodi@gmail.com" },
  { label: "Phone", value: "07025784372", href: "tel:+917025784372" },
  { label: "LinkedIn", value: "linkedin.com/in/shanoop-t-k-61b0183a9", href: "https://linkedin.com/in/shanoop-t-k-61b0183a9/" },
  { label: "GitHub", value: "github.com/shanoopthikkodi19", href: "https://github.com/shanoopthikkodi19" },
  { label: "Upwork", value: "upwork.com/freelancers/~017475a4043828b221", href: "https://upwork.com/freelancers/~017475a4043828b221" },
];

function Icon() {
  return (
    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage text-white">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      </svg>
    </span>
  );
}

function ShieldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </svg>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{children}</h2>
      {sub && <p className="mt-2 max-w-prose text-sm text-muted">{sub}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-5">
          <a href="#home" className="text-lg font-extrabold tracking-tight">
            SHANOOP.
          </a>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[13px] font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={
                    item.href === "#certification"
                      ? "inline-flex items-center gap-1.5 rounded-full bg-sage/20 px-3 py-1 text-sage-dark transition-colors hover:bg-sage hover:text-white"
                      : "py-1 transition-colors hover:text-sage-dark"
                  }
                >
                  {item.href === "#certification" && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                    </svg>
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* Home / Hero */}
        <section id="home" className="relative overflow-hidden bg-white">
          <div className="hero-panel absolute inset-y-0 right-0 hidden w-[62%] bg-panel md:block" aria-hidden="true">
            <Image
              src="/profile.jpg"
              alt="Portrait of Shanoop T K"
              width={1000}
              height={1000}
              priority
              className="absolute bottom-0 right-[10%] h-[92%] w-auto max-w-none rounded-t-[999px] object-cover object-top"
            />
          </div>

          <div className="relative mx-auto flex min-h-[28rem] max-w-6xl items-center px-6 py-16 md:min-h-[34rem]">
            <div className="max-w-md">
              <Image
                src="/profile.jpg"
                alt="Portrait of Shanoop T K"
                width={160}
                height={160}
                className="mb-6 h-28 w-28 rounded-full object-cover ring-4 ring-sage md:hidden"
              />
              <p className="mb-4 text-xs font-semibold tracking-widest text-sage-dark">
                RHCSA certified Linux system administrator
              </p>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Hi, I am <span className="text-sage-dark">Shanoop T K</span>. I run Linux servers, automation and CI/CD.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Ansible, Docker, Podman and GitHub Actions on AWS and Google Cloud. Based in Kozhikode, Kerala.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="rounded bg-sage px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-sage-dark">
                  Hire me
                </a>
                <a
                  href="/Shanoop_TK_Resume_Linux_DevOps.pdf"
                  download
                  className="rounded border border-neutral-300 bg-white px-5 py-2 text-xs font-semibold transition-colors hover:border-sage-dark"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-surface">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {stats.map((s) => (
              <li key={s.label} className="flex items-center gap-4">
                <Icon />
                <div>
                  <p className="text-2xl font-bold leading-none">{s.value}</p>
                  <p className="mt-1 text-[11px] font-medium text-sage-dark">{s.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <div className="flex aspect-[4/3] items-end justify-center overflow-hidden bg-panel" aria-hidden="true">
              <svg viewBox="0 0 400 300" className="h-[85%] text-foreground/80" fill="currentColor">
                <circle cx="200" cy="90" r="50" />
                <path d="M80 300c0-90 50-150 120-150s120 60 120 150z" />
              </svg>
            </div>
            <div>
              <SectionTitle>About me</SectionTitle>
              <p className="mt-4 max-w-prose leading-relaxed text-muted">
                I am an RHCSA-certified Linux system administrator. I install, configure, upgrade and troubleshoot
                Linux servers, and I support web application servers (Nginx, Apache, Plesk) secured with TLS/SSL.
              </p>
              <p className="mt-4 max-w-prose leading-relaxed text-muted">
                I automate with Bash and Ansible, ship with Docker, Podman and GitHub Actions, and have worked on
                patching, maintenance and issue resolution in a government/defense IT environment. This site runs
                on my own AWS EC2 server, containerised behind Plesk/nginx with HTTPS and an automated pipeline.
              </p>
              <a href="#contact" className="mt-6 inline-block rounded bg-sage px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-sage-dark">
                Work with me
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle sub="Tools I use for administration, automation and deployment.">Technical skills</SectionTitle>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((group) => (
                <li key={group.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certification */}
        <section id="certification" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle sub="Industry-recognised Red Hat credential, earned through hands-on practical exam.">
              Certification
            </SectionTitle>

            <div className="mt-10 overflow-hidden rounded-lg border border-neutral-200 md:grid md:grid-cols-[18rem_1fr]">
              <div className="flex flex-col items-center justify-center gap-3 bg-sage px-8 py-10 text-center text-white">
                <ShieldIcon />
                <p className="text-3xl font-extrabold tracking-tight">{certification.short}</p>
                <p className="text-sm font-medium leading-snug">{certification.name}</p>
                <span className="mt-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold">
                  Valid until {certification.expires}
                </span>
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded bg-white px-4 py-2 text-xs font-semibold text-sage-dark transition-colors hover:bg-surface"
                >
                  Verify on Red Hat
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </a>
              </div>

              <div className="p-8">
                <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <dt className="text-[11px] font-medium text-muted">Issued by</dt>
                    <dd className="mt-1 text-sm font-semibold">{certification.issuer}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium text-muted">Issued</dt>
                    <dd className="mt-1 text-sm font-semibold">{certification.issued}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium text-muted">Expires</dt>
                    <dd className="mt-1 text-sm font-semibold">{certification.expires}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium text-muted">Credential ID</dt>
                    <dd className="mt-1 text-sm font-semibold">
                      <a href={certification.verifyUrl} target="_blank" rel="noopener noreferrer" className="text-sage-dark hover:underline">
                        {certification.id}
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 border-t border-neutral-200 pt-6">
                  <h3 className="text-sm font-semibold">Skills covered</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {certification.covers.map((c) => (
                      <li key={c} className="rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-sage-dark">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 max-w-prose text-sm leading-relaxed text-muted">
                    Prepared through intensive hands-on training at COSS India (12 June – 8 July 2026) and applied
                    on my own production server.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle sub="Real deployments with documentation.">Projects</SectionTitle>
            <ul className="mt-10 grid gap-6 lg:grid-cols-2">
              {projects.map((p) => (
                <li key={p.title} className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6 transition-colors hover:border-sage">
                  <span className="w-fit rounded-full bg-sage/20 px-3 py-1 text-[11px] font-semibold text-sage-dark">{p.tag}</span>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex gap-4 pt-6 text-sm font-medium">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sage-dark hover:underline">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle sub="From web hosting support to Linux and cloud engineering.">Experience</SectionTitle>
            <ol className="mt-10 space-y-10 border-l-2 border-sage/40 pl-8">
              {experience.map((e) => (
                <li key={e.role + e.org} className="relative">
                  <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-sage ring-4 ring-white" aria-hidden="true" />
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <p className="text-sm font-medium text-sage-dark">{e.org}</p>
                  {(e.period || e.place) && (
                    <p className="mt-1 text-xs text-muted">{[e.period, e.place].filter(Boolean).join(", ")}</p>
                  )}
                  <ul className="mt-3 max-w-3xl space-y-1.5 text-sm leading-relaxed text-muted">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle>Education</SectionTitle>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {education.map((e) => (
                <li key={e.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                  <p className="text-xs font-semibold text-sage-dark">{e.year}</p>
                  <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted">{e.school}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <div>
              <SectionTitle>Contact me</SectionTitle>
              <p className="mt-4 max-w-prose leading-relaxed text-muted">
                Need a Linux server set up, a migration, or a CI/CD pipeline? Tell me about it and I will reply
                within two working days.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {contactLinks.map((c) => (
                  <li key={c.label} className="flex gap-3">
                    <span className="w-16 shrink-0 text-muted">{c.label}</span>
                    <a href={c.href} className="break-all font-medium text-sage-dark hover:underline">
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <form action="mailto:shanoopthikkodi@gmail.com" method="post" encType="text/plain" className="space-y-4">
              <input name="name" type="text" required placeholder="Your name" className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-sm" />
              <input name="email" type="email" required placeholder="Your email" className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-sm" />
              <textarea name="message" required rows={4} placeholder="Your message" className="w-full rounded border border-neutral-300 bg-white px-4 py-3 text-sm" />
              <button type="submit" className="rounded bg-sage px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sage-dark">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-surface py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Shanoop T K. All rights reserved.
      </footer>
    </>
  );
}
