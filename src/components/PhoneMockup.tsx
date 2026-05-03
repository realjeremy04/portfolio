export function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[175px] rounded-[2px] bg-[#ddd6cf] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:max-w-[240px]">
      <div className="mx-auto h-[330px] w-full rounded-[26px] border border-black/70 bg-[#efefef] p-2 sm:h-[360px]">
        <div className="mx-auto h-3 w-14 rounded-b-[12px] bg-black" />
        <div className="mt-2 h-[calc(100%-16px)] rounded-[18px] bg-white px-4 py-5 text-center text-[#151515]">
          <p className="display-font text-[14px] font-bold tracking-[0.18em]">MODERN</p>
          <div className="mt-4 grid h-[210px] place-items-center rounded-[12px] bg-[linear-gradient(180deg,#cfcfcf,#fbfbfb)] sm:h-[232px]">
            <div className="flex h-[152px] w-[84px] items-end justify-center rounded-[10px] bg-[linear-gradient(180deg,#ffffff,#ececec)] shadow-[0_15px_30px_rgba(0,0,0,0.22)]">
              <div className="h-[108px] w-[62px] rounded-[6px] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.28),transparent_55%),linear-gradient(180deg,#7e7e7e,#222)]" />
            </div>
          </div>
          <p className="mt-3 text-[9px] tracking-[0.24em] text-[#777]">GALLERY COVER</p>
        </div>
      </div>
    </div>
  )
}