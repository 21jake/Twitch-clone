import React from "react";
import ReactDom from "react-dom";

const Modal = (props) => {

    const { header, prompt } = props;

    return ReactDom.createPortal(
        <div
            onClick={() => props.onDismiss()}
            className="ui modals dimmer visible active" >
            <div
                onClick={e => e.stopPropagation()}
                className="ui modal standard visible active">
                <div className="header">
                    {header || "Modal Header"}
                </div>
                <div className="content">
                    {prompt || "Modal prompt"}
                </div>
                <div className="actions">
                    {props.actions()}
                </div>
            </div>
        </div>
        , document.querySelector('#modal'))
}

export default Modal;