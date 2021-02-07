import React from "react";
import { createStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onFormSubmit = (values) => {
        this.props.createStream(values)
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onFormSubmit} />
            </div>
        )
    }

}

export default connect(null, { createStream })(StreamCreate);