import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Site.module.css'

export default function SearchBar({placeholder, data}) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
      // if specific word letters order:
      // return value.title.toLowerCase().startsWith(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <section className={styles.section}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length != 0 && (
        <div className={styles.search_result}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className={styles.post}>
                <h3><Link as={`/posts/${value.slug}`} href="/posts/[slug]"><a>{value.title}</a></Link></h3>
              </div>
            );
          })}
        </div>
      )}
    </section>
  )
}
