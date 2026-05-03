import { ExperienceItem } from './components/ExperienceItem'
import { Navbar } from './components/Navbar'
import { PhoneMockup } from './components/PhoneMockup'
import { ProjectListItem } from './components/ProjectListItem'
import { SectionHeading } from './components/SectionHeading'
import { SkillRail } from './components/SkillRail'
import { experiences, navLinks, projects, skillGroups, stats } from './data/portfolio'

function App() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#d4d4d4]">
      <Navbar links={navLinks} />

      <main className="mx-auto max-w-280 px-5 pb-16 pt-6 sm:px-8 lg:px-10 lg:pb-20">
        <section id="home" className="grid gap-12 pb-16 pt-10 md:grid-cols-[1.15fr_0.85fr] md:items-start md:pt-12">
          <div className="space-y-10 animate-[fade-up_700ms_ease-out_both]">
            <div className="space-y-5">
              <h1 className="display-font max-w-105 text-[58px] font-black uppercase leading-[0.88] tracking-tighter text-white sm:text-[74px] lg:text-[82px]">
                <span className="block text-[#00ff66]">Frontend</span>
                <span className="block text-[#ebebeb]">Developer</span>
              </h1>
              <p className="max-w-135 text-[13px] leading-6 text-[#a9a9a9] sm:text-[14px]">
                Hi! I am Jeremy. A Frontend Web Developer based in Vietnam. With over 1 year of
                experience, I help people to grow their business by providing powerful and modern Web solutions.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xs bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
              >
                Hire Me
              </a>
            </div>
          </div>

          <aside className="grid gap-6 text-right md:pt-14">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="display-font text-[52px] font-black leading-none text-[#00ff66] sm:text-[60px]">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-[0.06em] text-[#9a9a9a]">{stat.label}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="border-t border-white/10 py-14">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <h2 className="display-font text-[40px] font-black uppercase leading-[0.92] text-[#ededed] sm:text-[52px]">
              Hi, I&apos;m Jeremy.
            </h2>
            <div className="max-w-107.5 space-y-5 text-[13px] leading-7 text-[#c2c2c2] sm:text-[14px]">
              <p>
                I&apos;m a 21 years-old passionate frontend web developer dedicated to turning ideas into creative
                solutions. I specialize in creating seamless and intuitive user experiences.
              </p>
              <p>
                I&apos;m involved in every step of the process: from discovery and design to development, testing, and
                deployment. I focus on delivering high-quality, scalable results that drive positive user experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <SectionHeading title="My Stack" eyebrow="*" />
          <div className="space-y-2">
            {skillGroups.map((group) => (
              <SkillRail key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section className="py-20">
          <SectionHeading title="My Experiences" eyebrow="*" />
          <div className="space-y-8">
            {experiences.map((item) => (
              <ExperienceItem key={`${item.company}-${item.role}`} item={item} />
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <SectionHeading title="Selected Projects" eyebrow="*" />
          <div className="grid gap-10 lg:grid-cols-[1fr_250px] lg:items-start">
            <div>
              {projects.map((project) => (
                <ProjectListItem key={project.number} project={project} />
              ))}
            </div>
            <div className="pt-4 lg:pt-10">
              <PhoneMockup />
            </div>
          </div>
        </section>

        <section id="contact" className="flex flex-col items-center justify-center gap-3 py-24 text-center">
          <p className="text-[12px] text-[#bfbfbf]">Have a project in mind?</p>
          <a
            href="mailto:youremail@gmail.com"
            className="display-font border-b border-white/50 pb-1 text-[28px] font-black uppercase text-[#ebebeb] transition hover:border-[#00ff66] hover:text-[#00ff66] sm:text-[36px]"
          >
            youremail@gmail.com
          </a>
          <p className="text-[12px] text-[#8d8d8d]">Copyright © 2026 Jeremy</p>
        </section>
      </main>
    </div>
  )
}

export default App
