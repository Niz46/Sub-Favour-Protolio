import React from "react";
import { RxCopy } from "react-icons/rx";
import { SiAntdesign } from "react-icons/si";
import { FaChartPie, FaConnectdevelop } from "react-icons/fa";
import OfferCard from "./OfferCard";

const Offers = () => {
  return (
    <div className="bg-[#0F1113] text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          What I offer.
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          <OfferCard
            title="MOBILE"
            subTitle="Mobile developing native mobile applications for iOS and Android platforms."
            Icon={RxCopy}
          />
          <OfferCard
            title="DESIGN"
            subTitle="Design services for websites and mobile apps to create intuitive and user-friendly interfaces."
            Icon={SiAntdesign}
          />
          <OfferCard
            title="MARKETING"
            subTitle="Marketing involves promoting products services to attract and retain customers"
            Icon={FaChartPie}
          />
          <OfferCard
            title="WEB"
            subTitle="Web to create custom management systems for website management and content publishing."
            Icon={FaConnectdevelop}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
