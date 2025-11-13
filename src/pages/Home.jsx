import React from "react";
import Banner from "../components/Banner";
import Newsletter from "../components/NewsLetter";
import EventsGallery from "../components/EventsGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">
              <span className="text-red-600">A community-driven</span> <br />{" "}
              event management <br /> platform where <br />{" "}
              <span className="text-blue-600">you can </span>,
              <span className="text-red-600">create</span>{" "}
              <span className="text-green-600">Join</span>, <br /> and{" "}
              <span className="text-red-600">track</span> social service <br />{" "}
              events in your local area.
            </h1>
            <p className="py-6">
              Participants can browse events based on their interests or <br />
              location, register with a single click, and monitor their <br />
              volunteer hours <br /> and contributions. By combining technology
              with <br />
              community spirit, <br />
              the platform transforms local engagement into a <br />
              seamless and rewarding experience.
            </p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/4b/9a/0c/4b9a0c0e54e8c9d8e730f43ab6248739.jpg"
              className="md:max-w-fit rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      <EventsGallery></EventsGallery>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
