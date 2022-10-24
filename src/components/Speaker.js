import { useState, useContext, memo } from "react";
import { SpeakerFilterContext } from "./../contexts/SpeakerFilterContext";
import { SpeakerProvider, SpeakerContext } from "./../contexts/SpeakerContext";
import ErrorBoundary from "./ErrorBoundry";
import SpeakerDelete from "./SpeakerDelete";

function Session({ title, room }) {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

function Sessions() {
  const { eventYear } = useContext(SpeakerFilterContext);
  const { speaker } = useContext(SpeakerContext);
  const sessions = speaker.sessions;
  return (
    <div className="sessionBox card h-250">
      {sessions
        .filter((session) => {
          console.log(sessions);
          console.log(session);
          return session.eventYear === eventYear;
        })
        .map((session) => {
          console.log(session);
          return (
            <div className="session w-100" key={session.id}>
              <Session {...session} />
            </div>
          );
        })}
    </div>
  );
}

function ImageWithFallback({ src, ...props }) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }

  return <img src={imgSrc} {...props} onError={onError} />;
}

function SpeakerImage() {
  const {
    speaker: { id, first, last },
  } = useContext(SpeakerContext);
  return (
    <div className="speaker-img d-flex justify-content-center align-items-center h-300">
      <ImageWithFallback
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
        className="contain-fit"
      />
    </div>
  );
}

function SpeakerFavorite() {
  const { speaker, updateRecord } = useContext(SpeakerContext);
  const [inTransition, setInTransition] = useState(false);

  function doneCallback() {
    setInTransition(false);
    console.log(
      `In speakerFavorite: doneCallback ${new Date().getMilliseconds()}`
    );
  }

  return (
    <div className="action padB1">
      <span
        onClick={() => {
          setInTransition(true);
          updateRecord(
            { ...speaker, favorite: !speaker.favorite },
            doneCallback
          );
        }}
      >
        <i
          className={
            speaker.favorite === true
              ? "fa fa-star orange"
              : "fa fa-star-o orange"
          }
        ></i>{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"> </span>
        ) : null}
      </span>
    </div>
  );
}

function SpeakerDemographics() {
  const { speaker } = useContext(SpeakerContext);
  const {
    first,
    last,
    bio,
    company,
    twitterHandle,
    favorite,
    onFavoriteToggle,
  } = speaker;
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite />
      <div>
        <p className="card-description">{bio.substr(0, 70)}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

const SpeakerNoErrorBoundry = memo(function Speaker({
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
  showErrorCard,
}) {
  const { showSessions } = useContext(SpeakerFilterContext);

  if (showErrorCard) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <img src="/images/speaker-99999.jpg" />

          <div>
            <b>Error Showing Speaker</b>
          </div>
        </div>
      </div>
    );
  }
  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage />

          <SpeakerDemographics {...speaker} />
        </div>
        {showSessions === true ? <Sessions /> : null}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
},
areEqualSpeaker);

function Speaker(props) {
  return (
    <ErrorBoundary
      errorUI={
        <SpeakerNoErrorBoundry
          {...props}
          showErrorCard={true}
        ></SpeakerNoErrorBoundry>
      }
    >
      <SpeakerNoErrorBoundry {...props}></SpeakerNoErrorBoundry>
    </ErrorBoundary>
  );
}

function areEqualSpeaker(prevProps, nextProps) {
  return prevProps.speaker.favorite === nextProps.speaker.favorite;
}

export default Speaker;
