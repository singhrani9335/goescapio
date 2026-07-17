import Image from "next/image";

export default function BookNowHelpCard() {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#e6e6e6]
        bg-white
        px-4
        py-3
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        {/* SUPPORT IMAGE */}

        <Image
          src="/images/support-help.png"
          alt="Need Help"
          width={55}
          height={55}
          className="object-contain"
        />

        {/* CONTENT */}

        <div>
          <h3
            className="
              text-[16px]
              font-bold
              leading-5
              text-black
            "
          >
            Need Help?
          </h3>

          <p
            className="
              mt-1
              text-[14px]
              leading-5
              text-black
            "
          >
            Call us: <span className="font-bold">07744848000</span>
          </p>

          <p
            className="
              text-[14px]
              leading-5
              text-black
            "
          >
            Mail us: <span className="font-bold">sales@goescapio.in</span>
          </p>
        </div>
      </div>
    </div>
  );
}