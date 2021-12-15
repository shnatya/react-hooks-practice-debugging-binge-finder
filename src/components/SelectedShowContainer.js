import React, { useState } from "react";
import Episode from "./Episode";

function SelectedShowContainer(props) {
  const [selectedSeason, setSelectedSeason] = useState(1);

  function mapSeasons() {
    if (allEpisodes) {
      let seasons = allEpisodes.map((e) => e.season).unique();

      return seasons.map((s) => {
        return (
          <option value={s} key={s}>
            Season
          </option>
        );
      });
    }
  }

  function mapEpisodes() {
    return allEpisodes.map((e) => {
      if (e.season === selectedSeason) {
        return <Episode eachEpisode={e} key={e.id} />;
      }
    });
  }

  function handleSelectionChange(e) {
    setSelectedSeason(e.target.value);
  }

  const { selectedShow, allEpisodes } = props;

  return (
    <div style={{ position: "static" }}>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      <select style={{ display: "block" }} onChange={handleSelectionChange}>
        {mapSeasons()}
      </select>
      {mapEpisodes()}
    </div>
  );
}

// Array.prototype.unique = function () {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (!arr.includes(this[i])) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

export default SelectedShowContainer;