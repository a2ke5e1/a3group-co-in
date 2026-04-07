"use client";

import React from "react";
import { createComponent } from "@lit/react";
import { MdOutlinedTextField } from "@material/web/textfield/outlined-text-field.js";
import { MdFilledTextField } from "@material/web/textfield/filled-text-field.js";

export const OutlinedTextField = createComponent({
  tagName: "md-outlined-text-field",
  elementClass: MdOutlinedTextField,
  react: React,
  events: {
    onInput: "input",
    onChange: "change",
  },
});

export const FilledTextField = createComponent({
  tagName: "md-filled-text-field",
  elementClass: MdFilledTextField,
  react: React,
  events: {
    onInput: "input",
    onChange: "change",
  },
});
