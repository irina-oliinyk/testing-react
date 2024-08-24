// Запит при монтажі на Hacker News API
import { useEffect } from 'react';
import axios from 'axios';
import css from './Articles.module.css';

export default function Articles() {
  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      // Тут будемо виконувати HTTP-запит
      const response = await axios.get(
        'https://hn.algolia.com/api/v1/search?query=react'
      );
      console.log(response);
    }
    fetchArticles();
  }, []);

  return (
    <div className={css.div}>
      <h1>Articles</h1>
      <p>десь тут будуть запити</p>
    </div>
  );
}
