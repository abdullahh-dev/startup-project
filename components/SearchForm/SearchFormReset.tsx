"use client";

import Link from "next/link";
import { CgClose } from "react-icons/cg";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector("search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn">
        <CgClose />
      </Link>
    </button>
  );
};

export default SearchFormReset;
