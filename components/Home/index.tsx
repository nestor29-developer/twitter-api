import { useEffect, useState } from "react";
import { RecentTwitter } from "../common/models/searchTwitter";
import { List } from "../List";
import { TwitterSearch } from "../UI/Twit-search";
import styles from "./Home.module.css";

export const Home = () => {
  const [query, setQuery] = useState("trends");
  const [data, setData] = useState<RecentTwitter>();

  useEffect(() => {
    async function fetchRecentTwitters() {
      const url = `http://localhost:3000/search-twitter?query=${query}`;
      let response: any = await fetch(url, {
        method: "get",
        headers: new Headers({
          Authorization:
            "AAAAAAAAAAAAAAAAAAAAAFrhjAEAAAAAheZXPGW4ddYJoamKlRYY%2BR9l1EY%3DgXhCBrw7Baw7NqqomCUW8stkDfpWinSuPxO75SAaZcxD4j9zxq",
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
      response = await response.json();
      if (response && response.data) {
        setData(response.data);
      }
    }
    if (query && query.length > 2) {
      fetchRecentTwitters();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <TwitterSearch setQuery={setQuery} />
      <List data={data} />
    </div>
  );
};
