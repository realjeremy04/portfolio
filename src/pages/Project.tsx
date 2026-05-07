import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { CommitGraph } from '../components/projects/CommitGraph'
import { ProjectListItem } from '../components/projects/ProjectListItem'
import { ProjectsHeroVisual } from '../components/projects/ProjectsHeroVisual'
import { projectShowcase } from '../data/projectShowcase'

function Project() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[#e6e6e6]">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,102,0.08),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_22%,transparent_78%,rgba(255,255,255,0.02)_100%)]" />

			<section className="relative snap-start px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10">
				<div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-10 lg:py-0 lg:-translate-y-3 xl:-translate-y-4">
					<ScrollReveal className="order-2 w-full max-w-[21.5rem] space-y-4 sm:max-w-[26rem] sm:space-y-5 md:max-w-[31rem] lg:order-1 lg:max-w-[31rem] lg:space-y-6 lg:self-center xl:space-y-7" from="left">
						<SectionHeading title="My Projects" eyebrow="SELECTED WORK" animateItems compact framedTitle hideEyebrowOnMobile className="relative z-10 -mt-10 ml-3 sm:-mt-12 sm:ml-4 md:-mt-14 md:ml-5 lg:mt-0 lg:ml-0" />
						<div className="max-w-[21rem] space-y-2 text-[11.5px] leading-[1.45rem] text-[#c2c2c2] sm:max-w-[24rem] sm:space-y-2.5 sm:text-[12.5px] sm:leading-6 md:max-w-[28rem] lg:max-w-xl lg:text-[14px] lg:leading-7">
							<p data-reveal-item>
								A premium showcase of technical work built with the same spacing rhythm, typography, and motion language as the Homepage.
							</p>
						</div>

						<div className="flex flex-wrap gap-3 pt-1 sm:gap-3.5">
							<div data-reveal-item className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d7d7d7]">
								React
							</div>
							<div data-reveal-item className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d7d7d7]">
								TypeScript
							</div>
							<div data-reveal-item className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d7d7d7]">
								Tailwind
							</div>
						</div>

						<a
							data-reveal-item
							href="#featured-projects"
							className="inline-flex min-h-12 min-w-[10.25rem] items-center justify-center rounded-full border border-[#00ff66]/80 bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#101214] shadow-[0_10px_24px_rgba(0,255,102,0.12)] transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#3dff90] hover:bg-[#19ff79] hover:shadow-[0_16px_30px_rgba(0,255,102,0.2)] active:translate-y-0 active:scale-[0.98]"
						>
							Scroll Projects
						</a>
					</ScrollReveal>

					<ScrollReveal className="order-1 w-full max-w-[21.5rem] justify-self-center sm:max-w-[26rem] md:max-w-[31rem] lg:order-2 lg:max-w-[30rem] xl:max-w-[36rem]" from="right" delay={16}>
						<div data-reveal-item className="relative">
							<ProjectsHeroVisual />
						</div>
					</ScrollReveal>
				</div>
			</section>

			<section id="featured-projects" className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
				<div className="mx-auto max-w-360">
					<ScrollReveal>
						<div className="flex flex-col gap-4">
							<div className="flex items-end gap-3">
								<p className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#98a18f] sm:text-[11px]">03</p>
								<h2 className="display-font text-[clamp(1.9rem,4.5vw,3.2rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#dfe6d0]">
									Projects
								</h2>
							</div>
							<div className="h-px w-full bg-white/10" />
						</div>
					</ScrollReveal>

					<div className="mt-6 sm:mt-8">
						{projectShowcase.map((project, index) => (
							<ScrollReveal key={project.number} from={index % 2 === 0 ? 'left' : 'right'} delay={index * 10}>
								<div data-reveal-item>
									<ProjectListItem project={project} />
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			<section className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
				<div className="mx-auto max-w-360">
					<ScrollReveal>
						<SectionHeading title="Commit Graph" eyebrow="06" animateItems compact />
					</ScrollReveal>

					<ScrollReveal from="up" delay={14}>
						<div data-reveal-item className="mt-8">
							<CommitGraph />
						</div>
					</ScrollReveal>
				</div>
			</section>
		</main>
	)
}

export default Project
