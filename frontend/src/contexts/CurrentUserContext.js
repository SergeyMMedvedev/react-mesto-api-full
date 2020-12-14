import React from 'react';

export const CurrentUserContext = React.createContext();

export const userDefault = {
  name: "...",
  about: "...",
  avatar: "",
  _id: "...",
  cohort: "...",
  default: true
} 