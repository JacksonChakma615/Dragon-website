import { Suspense } from "react";
import Categoryes from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={""}>
        <Categoryes></Categoryes>
      </Suspense>
    </div>
  );
};

export default LeftAside;
