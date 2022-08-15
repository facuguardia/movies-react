import style from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setserchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    setserchText(search || "");
  }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText);
    }

  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input className={style.searchInput} type="text" value={searchText} onChange={(e)=> setserchText(e.target.value)}/>
        <button className={style.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
