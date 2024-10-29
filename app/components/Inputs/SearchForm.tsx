import Form from "next/form";
const SearchForm = () => {
  return (
    <Form action="" className="flex items-center gap-2" scroll={false}>
      <input
        name="query"
        defaultValue=""
        className="px-3 py-[4px] placeholder:text-[12px] focus:outline-none bg-[#121212] border border-[#282828] rounded-lg"
        type="text"
        placeholder="Search Startups"
      />
      <button> 🔍</button>
    </Form>
  );
};

export default SearchForm;
