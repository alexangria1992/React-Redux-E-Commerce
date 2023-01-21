import React from "react";
import bannerImg from "./banner.png";
import ButtonLink from "../ButtonLink/ButtonLink";

const MainBanner = () => {
  return (
    <div className="flex container mx-auto bg-lime-200 items-center mt-20 mb-10">
      <div className="bg-teal-200 ">
        <h1 className="font-krona text-3xl md:text-5xl mb-4 md:mb-10">
          The Makeup e-commerce project
        </h1>

        <p>
          This project is built with data from a MakeUp API using Axios,
          Tailwind CSS, ReactJS, PropTypes, React Context API and React Router.
        </p>
        <p className="text-sm mb-6">
          Webtwo ipsum divvyshot. disqus elgg klout. Jumo wufoo hulu spotify
          trulia, twitter nuvvo. Omgpop tumblr odeo mog palantir squidoo balihoo
          nuvvo, etsy yuntaa elgg reddit kiko oovoo. Kno revver oovoo, blyve.
        </p>
        <ButtonLink path="/about" text="see more" isMain />
      </div>
      <div className="ml-4">
        <img
          src={bannerImg}
          alt="Tooth brush and a paste laying on top of a green leaf"
        />
      </div>
    </div>
  );
};

export default MainBanner;
