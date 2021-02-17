import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

const StreamList = (props) => {
    const { streams, currentUserId, isSignedIn } = props;
    useEffect(() => {
        props.fetchStreams();
    }, [])

    const renderCreateButton = () => {
        if (isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link className="ui button primary" to="streams/new">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    const renderEditOrDeleleButtons = (stream) => {
        if (stream.userId === currentUserId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`streams/edit/${stream.id}`}>
                        Edit
                    </Link>
                    <Link className="ui button negative" to={`streams/delete/${stream.id}`}>
                        Delete
                    </Link>
                </div>
            )
        }
    }
    // console.log(streams, 'stream');
    const streamList = () => (
        streams.map(stream => (
            <div className="item" key={stream.id}>
                {renderEditOrDeleleButtons(stream)}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    <Link  to={`streams/show/${stream.id}`}>
                        {stream.title}
                    </Link>
                    <div className="description">
                        {stream.description}
                    </div>
                </div>
            </div>
        ))
    )

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {streamList()}
            </div>
            {renderCreateButton()}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);