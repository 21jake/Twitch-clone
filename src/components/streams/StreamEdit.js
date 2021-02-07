import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import { useParams } from "react-router-dom";



const StreamEdit = (props) => {
    const { id } = useParams();
    const { stream } = props;

    useEffect(() => {
        props.fetchStream(id);
    }, [])
    console.log(stream, 'stream');

    return (
        <div>
            StreamEdit
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, {
    fetchStream
})(StreamEdit);