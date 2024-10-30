import React from "react";
import SearchForm from "@/components/SearchForm/SearchForm";
import AppCard from "@/components/Cards/AppCard";
import { ALL_STARTUPS_DATA } from "@/lib/DummyData";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <div>
      <div className="w-full md:min-h-[530px] min-h-[300px] px-[12px] md:px-10 mx-auto flex flex-col justify-center items-center">
        <h1 className="heading">Your Next Big Idea Starts Here</h1>
        <br />
        <p className="md:text-[18px] text-[13px] desc max-w-2xl text-center">
          Connect, share, and grow your startup ideas. Whether you&apos;re a
          dreamer or a doer, this is where ideas evolve into impactful ventures
        </p>
        <br />
        <SearchForm query={query} />
      </div>
      <div className="max-w[1440px] mx-auto px-8">
        <p className="text-3xl mb-12 font-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <div className="card_grid">
          {ALL_STARTUPS_DATA?.length > 0 ? (
            ALL_STARTUPS_DATA.map((s) => <AppCard key={s._id} data={s} />)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
