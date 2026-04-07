"use client";

import React from "react";

import { createComponent } from "@lit/react";
import { MdDialog } from "@material/web/dialog/dialog";

export const Dialog = createComponent({
  tagName: "md-dialog",
  elementClass: MdDialog,
  react: React,
  events: {
    onOpen: "open",
    onOpened: "opened",
    onClose: "close",
    onClosed: "closed",
    onCancel: "cancel",
  },
});
