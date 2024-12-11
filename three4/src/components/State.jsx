import { createRef } from "react";

const state = {
  sections: 2, // it gives me how many sections i have access to when i scroll
  pages: 2, // it gives me how many pages i have access to when i scroll
  zoom: 1,
  top: createRef(),
};

export default state;
