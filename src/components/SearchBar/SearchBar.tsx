import { FormEvent } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("Please enter your search ${query}.");
  };
  return (
    <header className={styles.header}>
      {" "}
      <div className={styles.container}>
        {" "}
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB{" "}
        </a>{" "}
        <form className={styles.form}>
          {" "}
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />{" "}
          <button className={styles.button} type="submit">
            Search{" "}
          </button>{" "}
        </form>{" "}
      </div>
    </header>
  );
}
