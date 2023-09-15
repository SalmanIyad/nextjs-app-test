"use client";

import React, { useState }  from "react";
import ProjectsList from "./projectsList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('none');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main>
      <div className="pb-4 border-b-2 border-gray-700 flex justify-between">
        <h1 className="flex items-center">Projects Page</h1>
        <Link href='/projects/create'>
          <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
            Add Project
          </button>
        </Link>
      </div>
      <br />
      {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small-label">Filter project type</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedOption}
          label="filter"
          onChange={handleChange}
        >
          <MenuItem value='none'><em>All</em></MenuItem>
          <MenuItem value='Mobile'>Mobile</MenuItem>
          <MenuItem value='Web'>Web</MenuItem>
          <MenuItem value='AI'>AI</MenuItem>
          <MenuItem value='Software'>Software</MenuItem>
        </Select>
        
      </FormControl> */}
      <form className="!w-[70%]" action="" method="get">
          <label htmlFor="filter">Filter Projects Type:</label>
          <select
            className="bg-[#ffffff66] outline-none"
            id="filter"
            name="filter"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="none">All</option>
            <option value="Mobile">Mobile</option>
            <option value="Web">Web</option>
            <option value="AI">AI</option>
            <option value="Software">Software</option>
          </select>
        </form>
      <ul className="flex flex-wrap justify-stretch gap-3 align-middle mt-5">
        <ProjectsList selectedOption={selectedOption} />
      </ul>
    </main>
  );
}
