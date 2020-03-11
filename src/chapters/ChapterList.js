import React from "react";

const handleScroll = ({ currentTarget }, onLoadMore) => {
  if (
    currentTarget.scrollTop + currentTarget.clientHeight >=
    currentTarget.scrollHeight
  ) {
    onLoadMore();
  }
};

export const ChapterList = ({ chapters, onLoadMore }) => {
  return (
    <div className="App">
      <h2>Baseball Card Collection</h2>
      <ul
        className="list-group chapter-list"
        onScroll={e => handleScroll(e, onLoadMore)}
      >
        {chapters.map(
          ({ id, player, url, company, card_type, year, notable }) => (
            <div key={id} className="list-group-item">
              Player: {player}, Year: {year}, Company: {company} Notable:{" "}
              {notable} <br />
              <a
                className="Link2"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export const AstroList = ({ chapters2, onLoadMore }) => {
  return (
    <div className="App">
      <h2>Astro Card Collection</h2>
      <ul
        className="list-group chapter-list"
        onScroll={e => handleScroll(e, onLoadMore)}
      >
        {chapters2.map(
          ({ id, player, url, company, card_type, year, notable }) => (
            <div key={id} className="list-group-item">
              Player: {player}, Year: {year}, Company: {company}, Notable:{" "}
              {notable} <br />
              <a
                className="Link2"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export const BasketballList = ({ chapters3, onLoadMore }) => {
  return (
    <div className="App">
      <h2>Basketball Card Collection</h2>
      <ul
        className="list-group chapter-list"
        onScroll={e => handleScroll(e, onLoadMore)}
      >
        {chapters3.map(
          ({ id, player, url, company, card_type, year, notable }) => (
            <div key={id} className="list-group-item">
              Player: {player}, Year: {year}, Company: {company}, Notable:{" "}
              {notable} <br />
              <a
                className="Link2"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export const FootballList = ({ chapters4, onLoadMore }) => {
  return (
    <div className="App">
      <h2>Football Card Collection</h2>
      <ul
        className="list-group chapter-list"
        onScroll={e => handleScroll(e, onLoadMore)}
      >
        {chapters4.map(
          ({ id, player, url, company, card_type, year, notable }) => (
            <div key={id} className="list-group-item">
              Player: {player}, Year: {year}, Company: {company}, Notable:{" "}
              {notable} <br />
              <a
                className="Link2"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          )
        )}
      </ul>
    </div>
  );
};
