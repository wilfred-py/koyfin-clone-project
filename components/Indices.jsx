import React from "react";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Data from "../src/Data";

export default function Indices(props) {
    return (
        <>
            <div>
                <InputGroup onClick={props.makeActive}>
                    <InputGroup.Checkbox aria-label="Checkbox for active index" />
                </InputGroup>
                {props.indexName}
                <span>{props.return}%</span>
            </div>
        </>
    );
}
