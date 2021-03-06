import React from "react";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ section }) => (
  <div className="directory-menu">
    {section.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
