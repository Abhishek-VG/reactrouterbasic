import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import PageThree from "./PageThree";
import {Form} from "./forms";
import Navigate from './Navigate';
// import your route components too
const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate />}>
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
          <Route path="three" element={<PageThree />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
