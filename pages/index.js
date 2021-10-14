import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Fragment } from "react";
import Layout from "../components/Layout";
import { Skills, Experience, projects } from "../service/profile";

const Index = () => {
  return (
    <Layout>
      {/* Header card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4 ">
                <img
                  src="/ryan-ray-profile2.jpeg"
                  alt="Person..."
                  className="container-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Rayn Ray</h1>
                <h3>FullStack developer</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </p>
                <Link href="/hireme">
                  <a>Hire me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Second section */}
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body h-100">
              <h2>Skills</h2>
              {Skills.map(({ Skill, percentage, id }) => (
                <div className="py-2" key={id}>
                  <h5>{Skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8" id="experience">
          <div className="card bg-light">
            <div className="card-body">
              <h2>Experience</h2>
              <ul>
                {Experience.map(({ title, from, to, description }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>{`${from}-${to}`}</h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Portafolio */}

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center text-light">Portafolio</h2>
              </div>

              {projects.map(({ title, description, img }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={img} alt={title} className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <Link href="/title">
                        <a>Know</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/portfolio">
                <a className="btn btn-outline-light mt-2">More projects</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
