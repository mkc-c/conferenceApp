import React from "react";
import SpeakersRendersProps from "../src/components/SpeakerRendersProps";

function Speakers() {
  return (
    <SpeakersRendersProps>
      {({ speakers }) => (
        <div>
          {speakers.map(({ imageSrc, name }) => {
            return (
              <img
                src={`images/${imageSrc}.jpg`}
                alt={name}
                key={imageSrc}
              ></img>
            );
          })}
        </div>
      )}
    </SpeakersRendersProps>
  );
}

export default Speakers;
