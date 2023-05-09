import React from "react";

const Search = () => {
  return (
    <form>
      <select>
        <option value="오늘">오늘</option>
        <option value="주간">주간</option>
      </select>
      <input placeholder="영문 지역명 ex)bucheon" />
      <button type="submit">검색</button>
    </form>
  );
};

export default Search;
