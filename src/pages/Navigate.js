import { Link, Outlet } from "react-router-dom";

const Navigate = () => {
  return (
    <div >
      <div>Nav</div>
      <nav style={{ padding: "10px", background: "grey", color: "white" }}>
        <Link to="/one">P-one</Link> {" | "}
        <Link to="/two">P-two</Link> {" | "}
        <Link to="/three">P-three</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigate;
