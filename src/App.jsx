import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Chart from "./components/Chart.jsx";
import * as Icon from "react-bootstrap-icons";
import UserProfile from "./components/UserProfile.jsx";
import Sidebar from "./components/Sidebar.jsx";

import {
  batterySensorData,
  internetSensorData,
  latencySensorData,
  motionSensorData,
} from "./data.js";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-dark text-white p-0">
          <Nav.Link as={Link} to="/" className="text-white fs-5 ps-5 pt-4">
            Dashboard
          </Nav.Link>
          <Sidebar />
        </Col>
        <Col md={10} className="p-0">
          <Navbar bg="dark" variant="dark">
            {/* <Navbar.Brand>Ketan</Navbar.Brand> */}
            <Nav className="ms-auto me-4 gap-3">
              <Nav.Item className="p-2">
                <Icon.Search size={20} className="text-white" />
              </Nav.Item>
              <Nav.Item className="p-2">
                <Icon.Activity size={20} className="text-white" />
              </Nav.Item>
              <Nav.Item>
                <NavDropdown
                  title={
                    <img
                      src="images/userProfile.png"
                      style={{ height: "36px" }}
                    />
                  }
                />
              </Nav.Item>
            </Nav>
          </Navbar>
          <Container fluid className="p-4 bg-secondary text-white">
            <Routes>
              <Route path="/" element={<MainDashboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

function MainDashboard() {
  return (
    <>
      <Row>
        <Col md={12}>
          <Chart
            title="Internet Sensor Graph"
            data={internetSensorData}
            datasetLabel="Internet Speed (Mbps)"
            icon={<Icon.Send className="me-2 text-success" />}
          />
        </Col>
        <Col md={6}>
          <Chart
            title="Motion Graph Sensor"
            data={motionSensorData}
            datasetLabel="Velocity (M/S)"
            icon={<Icon.Bell className="me-2 text-primary" />}
          />
        </Col>
        <Col md={6}>
          <Chart
            title="Latency Sensor Graph"
            data={latencySensorData}
            datasetLabel="Temperature (C)"
            icon={<Icon.Send className="me-2 text-success" />}
          />
        </Col>

        <Col md={12}>
          <Chart
            title="Battery Graph Sensor"
            data={batterySensorData}
            datasetLabel="Voltage (V)"
            icon={<Icon.Send className="me-2 text-success" />}
          />
        </Col>
      </Row>
    </>
  );
}

function Notifications() {
  return <h4>Notifications</h4>;
}

export default App;
