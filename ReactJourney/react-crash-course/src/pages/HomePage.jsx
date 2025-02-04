import React from "react";

import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

import { useLoaderData } from "react-router-dom";

const HomePage = () => {

  let loadJobs = useLoaderData()

  return (
    <>
      {/* <!-- Hero --> */}
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs "
      />
      {/* <!-- Developers and Employers --> */}
      <HomeCards />
      {/* <!-- Browse Jobs --> */}
      <JobListings isHome={true} loadedJobs={loadJobs}/>

      <ViewAllJobs />
    </>
  );
};

export default HomePage;
