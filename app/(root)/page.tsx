import React from "react";
import SearchForm from "../components/Inputs/SearchForm";

const Home = () => {
  return (
    <div className="w-full pattern md:min-h-[530px] min-h-[300px] px-[12px] md:px-10 mx-auto flex flex-col justify-center items-center">
      <h1 className="heading">Your Next Big Idea Starts Here</h1>
      <br />
      <p className="md:text-[18px] text-[13px] desc max-w-2xl text-center">
        Connect, share, and grow your startup ideas. Whether you&apos;re a
        dreamer or a doer, this is where ideas evolve into impactful ventures
      </p>
      <br />
      <SearchForm />
    </div>
  );
};

export default Home;
