import React from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import "./Dashboard_style.scss";
import FeatherIcon from "feather-icons-react";

const Dashboard = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid className="page-container">
          <div className="dashbord-header">
            <h1 className="page-header">Welcome to Hybrid</h1>
            <div className="dashboard-btn">
              <button className="m-2">Add team member</button>
              <button className="m-2">Order products</button>
            </div>
          </div>
          <Row className="dashboard-row-card">
            <Col xl="auto" lg="4" sm="12">
              <Card className="pricing-box text-center p-0">
                <CardBody className="p-4">
                  <div className="dashboard-card">
                    <div className="dashboard-card-header">
                      <FeatherIcon className="dashboard-icon" icon="users" />
                      <span>Team</span>
                    </div>
                    <span className="dashboard-view">{"View items >"}</span>
                  </div>
                  <div className="dashboard-card-body">
                    <h6>Pending</h6>
                    <span className="card-content">
                      4 team members pending signup
                    </span>
                  </div>
                  <div className="dashboard-card-footer">
                    <h6>Active</h6>
                    <span className="card-content">7 active team members</span>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="auto" lg="4" sm="12">
              <Card className="pricing-box text-center p-0">
                <CardBody className="p-4">
                  <div className="dashboard-card">
                    <div className="dashboard-card-header">
                      <FeatherIcon
                        className="dashboard-icon"
                        icon="shopping-cart"
                      />
                      <span>Webstore</span>
                    </div>
                    <span className="dashboard-view">{"View webstore >"}</span>
                  </div>
                  <div className="dashboard-card-body">
                    <h6>New products</h6>
                    <span className="card-content">
                      7 new products available
                    </span>
                  </div>
                  <div className="dashboard-card-footer">
                    <h6>Approved items</h6>
                    <span className="card-content">
                      5 new products available
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="auto" lg="4" sm="12">
              <Card className="pricing-box text-center p-0">
                <CardBody className="p-4">
                  <div className="dashboard-card">
                    <div className="dashboard-card-header">
                      <FeatherIcon
                        className="dashboard-icon"
                        icon="clipboard"
                      />
                      <span>Inventory</span>
                    </div>
                    <span className="dashboard-view">{"View inventory >"}</span>
                  </div>
                  <div className="dashboard-card-body">
                    <h6>Available</h6>
                    <span className="card-content">41 products available</span>
                  </div>
                  <div className="dashboard-card-footer">
                    <h6>Allocated</h6>
                    <span className="card-content">121 products allocated</span>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="auto" lg="4" sm="12">
              <Card className="pricing-box text-center p-0">
                <CardBody className="p-4">
                  <div className="dashboard-card">
                    <div className="dashboard-card-header">
                      <i class="fas fa-money-check dashboard-icon"></i>
                      <span>Orders</span>
                    </div>
                    <span className="dashboard-view">{"View orders >"}</span>
                  </div>
                  <div className="dashboard-card-body">
                    <h6>Pending</h6>
                    <span className="card-content">5 orders pending</span>
                  </div>
                  <div className="dashboard-card-footer">
                    <h6>Completed</h6>
                    <span className="card-content">7 orders completed</span>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="auto" lg="4" sm="12">
              <Card className="pricing-box text-center p-0">
                <CardBody className="p-4">
                  <div className="dashboard-card">
                    <div className="dashboard-card-header">
                      <i className="fas fa-desktop dashboard-icon"></i>
                      <span>Requests</span>
                    </div>
                    <span className="dashboard-view">{"View requests >"}</span>
                  </div>
                  <div className="dashboard-card-body">
                    <h6>Pending</h6>
                    <span className="card-content">4 requests pending</span>
                  </div>
                  <div className="dashboard-card-footer">
                    <h6>Completed</h6>
                    <span className="card-content">7 requests completed</span>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
