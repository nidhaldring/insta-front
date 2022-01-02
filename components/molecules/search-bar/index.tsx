import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

const SearchBarInput = () => {
  const [inputFocus, setInputFocus] = useState(true);

  return (
    <div className="flex items-center w-64 h-8 border bg-gray-50 relative px-2">
      {!inputFocus && (
        <div>
          <SearchRoundedIcon fontSize="small" className="text-gray-300" />
        </div>
      )}
      <input
        className="w-full h-full bg-gray-50 px-2 focus:outline-none"
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        placeholder="Search"
      />
      {inputFocus && (
        <div onClick={() => setInputFocus(false)}>
          <CancelIcon
            fontSize="small"
            className="text-gray-400 hover:text-gray-600 cursor-pointer"></CancelIcon>
        </div>
      )}
    </div>
  );
};

export default SearchBarInput;
