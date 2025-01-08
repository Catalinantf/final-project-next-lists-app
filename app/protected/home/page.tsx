"use client";

import FileCard from "@/components/ui/file-card";
import SearchInput from "@/components/ui/search-input";
import { useState } from "react";
import lists from "../../../utils/data/lists.json";
import SuggestionsDropdown from "@/components/ui/suggestions-dropdown";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [filteredLists, setFilteredLists] = useState(lists);

  const handleSearch = (event: any) => {
    const query = event.target.value.toLowerCase();
    setSearchText(query);

    const filtered = lists.filter((list) =>
      list.title.toLowerCase().includes(query)
    );
    setFilteredLists(filtered);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h2 className="mb-4 text-xl md:text-2xl">Inicio</h2>
        <SearchInput
          inputValue={searchText}
          handleFunction={handleSearch}
          children={
            <SuggestionsDropdown
              inputValue={searchText}
              suggestions={filteredLists}
            />
          }
        />

        <ul className="space-y-4">
          {lists.map((list, index) => (
            <FileCard title={list.title} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
