import React, { Children } from "react";
import "./select.css"

const Select = (props) => {
  return (
    <div className="field">
      <label className="field__name" htmlFor={props.nameField}>{props.text}</label>
      <select className="field__select"
        value={props.value}
        id={props.nameField}
        onChange={props.onChange}
      >
        {props.children}
      </select>
    </div>
  );
};

export default Select;
