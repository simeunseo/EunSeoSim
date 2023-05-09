import React from "react";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const navigate = useNavigate();
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { type: "week", area: "" },
    onSubmit: (values) => {
      navigate(`/${values.type}/${values.area}`);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <select name="type" onChange={handleChange} value={values.type}>
        <option value="today">오늘</option>
        <option value="week">주간</option>
      </select>
      <input
        name="area"
        value={values.area}
        onChange={handleChange}
        placeholder="영문 지역명 ex)bucheon"
      />
      <button type="submit" disabled={submitting}>
        검색
      </button>
    </form>
  );
};

export default SearchForm;
