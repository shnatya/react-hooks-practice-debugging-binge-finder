import React from "react";

function tvShow({selectShow, show}) {
  function onSelectShow(show){
    selectShow(show)
  }
  return (
    <div>
      <br />
      <img src={show.image.medium} onClick={onSelectShow} alt="" />
    </div>
  );
}

export default tvShow;
