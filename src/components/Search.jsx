import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input
          className={style.searchInput}
          type="text"
          placeholder="Title"
          aria-label="Search Movies"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            history.push("/?search=" + value);
          }}
        />
        <FaSearch className={style.searchButton} size={20} color="black" />
      </div>
    </form>
  );
}
