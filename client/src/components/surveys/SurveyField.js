import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  //   console.log(meta);
  return (
    <div>
      <label>{label}</label>
      <input {...input} styles={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {" "}
        {touched && error}
      </div>
    </div>
  );
};
