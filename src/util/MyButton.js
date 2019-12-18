import React from "react";
import { Tooltip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

export default ({ children, onClick, tip, btnClassName, tipClassName }) => (
  <Tooltip title={tip} className={tip.className}>
    <IconButton onClick={onClick} className="btnClassName">
      {children}
    </IconButton>
  </Tooltip>
);
