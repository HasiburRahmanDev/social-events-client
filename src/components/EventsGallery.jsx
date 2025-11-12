import React from "react";

const EventsGallery = () => {
  return (
    <div className="flex gap-5">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://i.pinimg.com/1200x/7d/e1/33/7de1339b9803194593d3b1119a9859f2.jpg"
            alt="clean"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Park cleaning</h2>
          <p>
            Medical health social workers work with patients with chronic
            diseases and help them cope with the difficulties caused by the
            disease. Bradford L. Huebner These can be any kind of illnesses such
            as Alzheimer's, cancer, or AIDS.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://i.pinimg.com/736x/93/c3/07/93c307d02c46087e24a1d596a45cf0e3.jpg"
            alt="clean"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Winter events</h2>
          <p>
            Medical health social workers work with patients with chronic
            diseases and help them cope with the difficulties caused by the
            disease. Bradford L. Huebner These can be any kind of illnesses such
            as Alzheimer's, cancer, or AIDS.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://i.pinimg.com/736x/78/78/19/787819613d532d85320242ba2f47f76a.jpg"
            alt="clean"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Help children</h2>
          <p>
            Medical health social workers work with patients with chronic
            diseases and help them cope with the difficulties caused by the
            disease. Bradford L. Huebner These can be any kind of illnesses such
            as Alzheimer's, cancer, or AIDS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsGallery;
