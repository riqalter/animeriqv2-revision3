import "./Home.css";
import React from "react";
import InfiniteSection from "../Sections/InfiniteSection";
import ScrollToTop from "react-scroll-to-top";
import Header from "../Sections/Header";
import UpcomingSection from "../Sections/UpcomingSection";
import AnimeSection from "../Sections/AnimeSection";
const Home = () => {
  return (
    <>
      <Header></Header>
      <UpcomingSection></UpcomingSection>
      <AnimeSection
        url={"https://api.mikailthoriq.cf/meta/anilist/recent-episodes"}
        id={"recent"}
        sectiontitle={"Recent"}
      ></AnimeSection>
      <AnimeSection
        url={"https://api.mikailthoriq.cf/meta/anilist/trending"}
        id={"trending"}
        sectiontitle={"Trending"}
      ></AnimeSection>
      <InfiniteSection
        url={"https://api.mikailthoriq.cf/meta/anilist/popular"}
        itemlimit={21}
        sectiontitle={"Most Popular"}
        id="popular"
        querytype={"?"}
      ></InfiniteSection>

      <ScrollToTop
        style={{
          border: "1px solid dodgerblue",
          background: "rgb(33, 33, 33)",
          opacity: 0.5,
          color: "white",
          boxShadow: "none",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
        className="scrolltop"
        top={1500}
        smooth
        color="#fff"
      />
    </>
  );
};
export default Home;
