import React, { useEffect, createRef } from "react";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";
import flv from "flv.js";

const StreamShow = (props) => {
  const { id } = useParams();
  const { stream } = props;
  const videoRef = createRef();
  const videoPlayer = flv.createPlayer({
    type: 'flv',
    url: `http://localhost:8000/live/${id}.flv`
  })

  useEffect(() => {
    props.fetchStream(id);
    videoPlayer.attachMediaElement(videoRef.current);
    videoPlayer.load();
    return function cleanUp() {
      videoPlayer.destroy();
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        style={{ width: "100%" }}
        controls
      />
      {!stream ? "Loading" :
        <>
          <h1>{stream.title}</h1>
          <h5>{stream.description}</h5>
        </>
      }
    </div>

  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow);