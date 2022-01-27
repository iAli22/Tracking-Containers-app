import React, { useState } from "react";
import style from "./Search.module.scss";
import searchIcon from "../../Assets/Icons/search.svg";
import { Image } from "react-bootstrap";

function Search({ getTerm }) {
  let [term, setTerm] = useState("");
  const getSearch = (e) => {
    setTerm(() => e.target.value);
  };
  const sendTerm = (e) => {
    e.preventDefault();

    getTerm(term);
  };
  return (
    <div className={style.search}>
      <h2>تتبع شحنتك</h2>
      <p>أدخل رقم الشحنة.</p>

      <form className={style.search__form} onSubmit={(e) => sendTerm(e)}>
        <input
          name="search"
          type="text"
          placeholder="رقم الشحنة"
          onChange={getSearch}
          autoComplete="off"
          value={term}
        />

        <button type="submit" className={style.formIcon}>
          <Image src={searchIcon} fluid />
        </button>
      </form>
    </div>
  );
}

export default Search;
