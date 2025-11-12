import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-12 my-12"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/ec/83/e7/ec83e7329ce4ed36e2712f620cc72fb5.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            In today’s fast-paced world, finding ways to make a positive impact
            within your community can be challenging. Our community-driven event
            management platform bridges that gap by empowering individuals and
            organizations to create, join, and track social service events right
            in their local areas. The platform provides an inclusive space where
            users can collaborate on initiatives that matter most — from
            environmental clean-ups and charity drives to educational workshops
            and neighborhood improvement projects. With easy-to-use tools,
            anyone can organize an event, invite volunteers, and share updates
            in real time.
          </p>
          <button className="btn btn-primary">Upcoming Events</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
