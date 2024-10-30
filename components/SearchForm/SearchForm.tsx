import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { BiSearchAlt2 } from "react-icons/bi";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      className="flex gap-2 items-center relative search-form"
      scroll={false}
    >
      <input
        name="query"
        defaultValue={query}
        className="px-3 py-[4px] placeholder:text-[12px] focus:outline-none bg-[#121212] border border-[#282828] rounded-lg"
        type="text"
        placeholder="Search Startups"
      />
      <div className="absolute top-[7px] right-12">
        {query && <SearchFormReset />}
      </div>
      <button
        type="submit"
        className="rounded-md bg-[#282828] border border-[#3f3f3f] p-2"
      >
        <BiSearchAlt2 />
      </button>
    </Form>
  );
};

export default SearchForm;
