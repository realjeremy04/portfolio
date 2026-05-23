import { SectionHeading } from '../SectionHeading'

const GithubStatsSection = () => {
    const username = 'realjeremy04'

    return (
        <section className="grid justify-items-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid w-full max-w-[92rem] gap-6">
                <SectionHeading title="Github Stats" eyebrow="PROFILE OVERVIEW" animateItems compact framedTitle />

                <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] xl:grid-cols-[20rem_minmax(0,1fr)]">
                    <div className="flex flex-col items-center gap-5 px-2 py-3 text-center lg:items-start lg:px-0 lg:py-0">
                        <div className="relative h-[11.5rem] w-[11.5rem] overflow-hidden rounded-full sm:h-[12.5rem] sm:w-[12.5rem] lg:h-[13rem] lg:w-[13rem]">
                            <img
                                src={`https://github.com/${username}.png`}
                                alt="Profile Avatar"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 min-w-[10.25rem] items-center justify-center rounded-full border border-[#00ff66]/80 bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#101214] shadow-[0_10px_24px_rgba(0,255,102,0.12)] transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#3dff90] hover:bg-[#19ff79] hover:shadow-[0_16px_30px_rgba(0,255,102,0.2)] active:translate-y-0 active:scale-[0.98]"
                        >
                            Visit Github
                        </a>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <img
                            src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=transparent`}
                            alt="Profile Details"
                            className="w-full rounded-[1.25rem] object-cover sm:col-span-2"
                        />
                        <img
                            src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=transparent`}
                            alt="Top Languages by Repo"
                            className="w-full rounded-[1.25rem] object-cover"
                        />
                        <img
                            src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=transparent`}
                            alt="Top Languages by Commit"
                            className="w-full rounded-[1.25rem] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubStatsSection;