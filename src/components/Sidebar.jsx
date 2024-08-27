import IconReact from "../assets/IconReact.jsx";
import { Card, Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function Sidebar() {
  return (
    <Nav
      className="flex-column bg-dark vh-100 sticky-top"
      style={{ padding: "18px" }}
    >
      <Card className="bg-primary" border="dark" style={{ height: "100%" }}>
        <Row>
          <Col md="3">
            <IconReact className="rounded-circle bg-black text-primary" />
          </Col>
          <Col md="9" className="text-white fs-5" style={{ marginTop: "14px" }}>
            CREATIVE TIM
          </Col>
        </Row>
        <hr className="text-white me-3 ms-3 border-1 opacity-100" />
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-2"
          style={{ fontSize: "12px" }}
        >
          <div className="text-white text-uppercase">
            <Icon.PieChart className="me-2" size={18} /> dashboard
          </div>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <div className="text-white text-uppercase">
            <Icon.BrightnessHigh className="me-2" size={18} /> icons
          </div>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <div className="text-white text-uppercase">
            <Icon.PinAngle className="me-2" size={18} /> map
          </div>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/notifications"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <div className="text-white text-uppercase">
            <Icon.Bell className="me-2" size={18} /> notifications
          </div>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/user-profile"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <div className="text-white text-uppercase">
            <Icon.Person className="me-2" size={18} /> user profile
          </div>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <div className="text-white text-uppercase">
            <Icon.Puzzle className="me-2" size={18} /> table list
          </div>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <div className="text-white text-uppercase">
            <Icon.TextCenter className="me-2" size={18} /> typography
          </div>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="text-white mt-3"
          style={{ fontSize: "12px" }}
        >
          <div className="text-white text-uppercase">
            <Icon.GlobeCentralSouthAsia className="me-2" size={18} /> rtl
            support
          </div>
        </Nav.Link>
        <Nav.Link as={Link} to="/" className="text-white mt-5">
          <div className="text-white text-uppercase">
            <Icon.RocketTakeoff className="me-2" size={18} /> upgrade to pro
          </div>
        </Nav.Link>
      </Card>
    </Nav>
  );
}

export default Sidebar;
