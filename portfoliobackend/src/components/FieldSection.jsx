import React from "react";
import "./FieldSection.css";

const FieldSection = ({ label, placeholder, type = "text", rightLabel }) => {
  return (
    <section className="fieldsection_cont">
      <div className="field_header">
        <h1 className="fieldtitle">{label}</h1>
        {rightLabel && (
          <span className="field_right_label">{rightLabel}</span>
        )}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="field_input"
      />
    </section>
  );
};

export default FieldSection;