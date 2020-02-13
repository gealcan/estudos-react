import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Filter = ({ onChange, value }) => {
  return (
    <div
      style={{
        // height: "25%",
        height: "7% ",
        backgroundColor: "#FFF",
        margin: "20px 5px 0px 7px",
        padding: "5px 5px 10px 40px",
        position: "absolute",
        borderRadius: 3
      }}
    >
      <FontAwesomeIcon
        style={{ position: "relative", right: 20, top: 5 }}
        color="gray"
        icon={faSearch}
      />
      <input
        style={{
          // position: "relative",
          height: 30,
          width: 220,
          textAlign: "left",
          border: 0,
          fontSize: "0.8em",
          paddingLeft: 20 // duvida, não consigo dar padding top no placeholder
        }}
        value={value}
        placeholder={"Pesquisar contatos"}
        onChange={e => onChange(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Filter;
