import React, { useEffect } from "react";
import Modal from '../Modal';
import history from '../../history';
import { deleteStream, fetchStream } from "../../actions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const StreamDelete = (props) => {
    const { stream } = props;
    const { id } = useParams();
    const handleCancelModal = () => {
        history.push('/');
    }
    useEffect(() => {
        props.fetchStream(id);
    }, [])

    const handleConfirmDelete = () => {
        props.deleteStream(id);
    }
    const actions = () => {
        return (
            <React.Fragment>
                <button
                    className="ui button"
                    onClick={() => handleCancelModal()}
                >
                    Cancel
                </button>
                <button
                    onClick={() => handleConfirmDelete()}
                    className="negative ui button"
                >
                    Delete
                </button>
            </React.Fragment>
        )
    }

    return (
        <Modal
            onDismiss={handleCancelModal}
            actions={actions}
            header="Delete Stream"
            prompt={`Are you sure you want to delete the stream "${stream?.title}"?`}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,
    {
        deleteStream,
        fetchStream
    }
)(StreamDelete);