import React, { useState, useEffect } from "react";
import "./news-list.scss";

//Do not forget to use useEffect hook!
const NewsList = () => {

    const [news, setNews] = useState({ data: [] });

    useEffect(() => {
        fetch("http://localhost:8000/api/team")
            .then((resp) => resp.json())
            .then((data) => setNews(data));
    }, []);

    const newsCards = news.data.map((news, index) => {
        return (
            <article className="news">
                <h3 className="news__title"> {news.title} </h3>
                <p className="news__content"> {news.content} </p>
                <div className="news__meta">
                  <time className="news__time"> {news.datetime} </time>
                  <span className="news__author"> {news.author} </span>
                </div>
            </article>
        );
    });

    useEffect(() => {
        fetch("http://localhost:8000/api/news", {
            method: "GET",
        })
            .then((resp) => resp.json())
            .then((data) => setNews(data));
    }, []);

    return <> {newsCards} </>;
};
export default NewsList;
