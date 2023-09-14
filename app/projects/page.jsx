"use client";

import React, { useState }  from "react";
import ProjectsList from "./projectsList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState('none');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main>
      <h1 className="pb-4 border-b-2 border-gray-700">Projects Page</h1>
      <br />
      <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }} size="small">
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
        
      </FormControl>
     
      <ul className="flex flex-wrap justify-stretch gap-3 align-middle mt-5">
        <ProjectsList selectedOption={selectedOption} />
      </ul>
    </main>
  );
}
