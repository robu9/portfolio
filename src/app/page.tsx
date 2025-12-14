import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
// page.tsx (top of file, after imports)
const SKILL_ICONS: Record<string, { imgSrc: string; imgAlt: string }> = {
  "React": { imgSrc: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png", imgAlt: "React" },
  "Next.js": { imgSrc: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png", imgAlt: "Next.js" },
  "TypeScript": { imgSrc: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png", imgAlt: "TypeScript" },
  "Node.js": { imgSrc: "https://img.icons8.com/?size=100&id=54087&format=png", imgAlt: "Node.js" },
  "Python": { imgSrc: "https://img.icons8.com/?size=100&id=13441&format=png", imgAlt: "Python" },
  "C++": { imgSrc: "https://img.icons8.com/?size=100&id=40670&format=png", imgAlt: "C++" },
  "JavaScript": { imgSrc: "https://img.icons8.com/?size=100&id=108784&format=png", imgAlt: "JavaScript" },
  "PostgreSQL": { imgSrc: "https://img.icons8.com/?size=100&id=38561&format=png", imgAlt: "PostgreSQL" },
  "MongoDB": { imgSrc: "https://img.icons8.com/?size=100&id=74402&format=png", imgAlt: "MongoDB" },
  "TailwindCSS": { imgSrc: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png", imgAlt: "TailwindCSS" },
  "LangChain": { imgSrc: "https://www.infralovers.com/images/posts/ai-for-devops-engineers/langchain_logo.png", imgAlt: "LangChain" },
  "YOLOv8": { imgSrc: "https://img.icons8.com/?size=100&id=sO8FyRETxIeA&format=png&color=000000", imgAlt: "YOLOv8" },
  "TensorFlow": { imgSrc: "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000", imgAlt: "TensorFlow" },
  "PyTorch": { imgSrc: "https://img.icons8.com/?size=100&id=jH4BpkMnRrU5&format=png", imgAlt: "PyTorch" },
};


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
     <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* BIG CARD WRAPPER */}
      {/* <div className="flex flex-col  z-[10] space-y-10 px-10 max-[450px]:px-4 py-4 relative border-dashed border dark:border-white/30 border-black/30 rounded-xl"> */}
        {/* SECTION SEPARATOR STYLE */}
        {/* <style>{`
          .section-divider {
            border-bottom: 1px dashed #6b7280;
            padding-bottom: 48px;
            margin-bottom: 48px;
          }
        `}</style> */}

        {/* HERO */}
        <section id="hero" className="section-divider">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-divider">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        {/* WORK */}
        <section id="work" className="section-divider">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        {/* <section id="education" className="section-divider">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section> */}

        {/* SKILLS */}
<section id="skills" className="section-divider">
  <div className="flex min-h-0 flex-col gap-y-3">
    <BlurFade delay={BLUR_FADE_DELAY * 9}>
      <h2 className="text-xl font-bold">Skills</h2>
    </BlurFade>

    <div className="flex flex-wrap gap-1">
      {DATA.skills.map((skill: string, id: number) => {
        const icon = SKILL_ICONS[skill];
        return (
          <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
            <Badge imgSrc={icon?.imgSrc} imgAlt={icon?.imgAlt ?? skill}>
              {skill}
            </Badge>
          </BlurFade>
        );
      })}
    </div>
  </div>
</section>



        {/* PROJECTS */}
        <section id="projects" className="section-divider">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects...
                </p>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* HACKATHONS */}
        <section id="hackathons" className="section-divider">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Want to chat? DM me on{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    className="text-blue-500 hover:underline"
                  >
                    Twitter
                  </Link>
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      {/* </div> */}
    </main>
  );
}
