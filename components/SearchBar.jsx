import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "../src/styles.css";

export default function SearchBar(props) {
    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button>Search</Button>
        </Form>
    );
}
