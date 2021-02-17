import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";

const StreamShow = (props) => {
  const { id } = useParams();
  const { stream } = props;
  useEffect(() => {
    props.fetchStream(id)
  }, [])
  return (
      !stream ?  "Loading" : 
      <div>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
      
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow);