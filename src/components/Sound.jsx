import React from "react";

export default function Sound(sound) {
  const audio = new Audio(sound);
  audio.play();
}
