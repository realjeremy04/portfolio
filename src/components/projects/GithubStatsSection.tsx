import { SectionHeading } from '../SectionHeading'

const GithubStatsSection = () => {
    const username = 'realjeremy04'

    return (
        <section className="grid justify-items-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid w-full max-w-[92rem] gap-6">
                <SectionHeading title="Github Stats" eyebrow="PROFILE OVERVIEW" animateItems compact framedTitle />

                <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[20rem_minmax(0,1fr)]">
                    <div className="flex flex-col items-center gap-5 rounded-[1.5rem] border border-white/10 bg-[#0f0f0f] px-6 py-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
                        <div className="relative h-[11.5rem] w-[11.5rem] overflow-hidden rounded-full border border-white/10 bg-black/20 shadow-[0_18px_60px_rgba(0,0,0,0.45)] sm:h-[12.5rem] sm:w-[12.5rem] lg:h-[13rem] lg:w-[13rem]">
                            <img
                                src={`https://github.com/${username}.png`}
                                alt="Profile Avatar"
                                className="h-full w-full object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-[#00ff66]/10" />
                        </div>

                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-[#f2f2f2] transition duration-200 hover:border-[#00ff66]/35 hover:bg-[#00ff66]/10 hover:text-white"
                        >
                            Visit Github
                        </a>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <img
                            src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=transparent`}
                            alt="Profile Details"
                            className="w-full rounded-[1.25rem] border border-white/10 bg-[#0f0f0f] object-cover shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:col-span-2"
                        />
                        <img
                            src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=transparent`}
                            alt="Most Commit Language"
                            className="w-full rounded-[1.25rem] border border-white/10 bg-[#0f0f0f] object-cover shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                        />
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`}
                            alt="Top Langs"
                            className="w-full rounded-[1.25rem] border border-white/10 bg-[#0f0f0f] object-cover shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubStatsSection;