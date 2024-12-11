import BoxPlaneMix from "./components/BoxPlaneMix";
import BoxBoxMix from "./components/BoxBoxMix";
import BoxBoxTravi from "./components/BoxBoxTravi";
import SpherePlane from "./components/SpherePlane";
import BoxTopLightShadow from "./components/BoxTopLightShadow";
import BoxSideLight from "./components/BoxSideLight";

import "./App.css";

function App() {
  return (
    <>
      {/* box with a plane under it */}
      {/* <BoxPlaneMix></BoxPlaneMix> */}

      {/* mix of boxes of different forms and combinations */}
      {/* <BoxBoxMix></BoxBoxMix> */}

      {/* timpano facsimile */}
      {/* <BoxBoxTravi></BoxBoxTravi> */}

      {/* plane with a plane under it */}
      {/* <SpherePlane></SpherePlane> */}

      {/* box with plane under and light from above that gives a shadow */}
      {/* <BoxTopLightShadow></BoxTopLightShadow> */}

      <BoxSideLight></BoxSideLight>
    </>
  );
}

export default App;
