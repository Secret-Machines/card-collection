import React from "react";

const handleScroll = ({ currentTarget }, onLoadMore) => {
  if (
    currentTarget.scrollTop + currentTarget.clientHeight >=
    currentTarget.scrollHeight
  ) {
    onLoadMore();
  }
};

const AstrosList = ({ chapters, onLoadMore }) => {
  return (
    <div>
      <h2>Astro Players Card Collection</h2>
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

export default AstrosList;
