import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, updateStream } from "../../actions";
import { useParams } from "react-router-dom";
import StreamForm from "./StreamForm";
import { omit } from "lodash";



const StreamEdit = (props) => {
    const { id } = useParams();
    const { stream } = props;

    const onFormSubmit = (values) => {
        // console.log(omit(values, "id"), 'omi values');
        props.updateStream(id, omit(values, "id", "userid") )
    }
    useEffect(() => {
        props.fetchStream(id);
    }, [])

    console.log(stream, 'stream');

    return (
        <div>
            <h3>Update a Stream</h3>
            <StreamForm onSubmit={onFormSubmit} initialValues={stream} />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {
    fetchStream,
    updateStream
})(StreamEdit);