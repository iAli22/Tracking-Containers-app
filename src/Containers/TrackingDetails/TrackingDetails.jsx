import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./TrackingDetails.module.scss";
import {
  TrackingTable,
  TrackingAddress,
  ReportProblem,
} from "../../Components";

function TrackingDetails({ data }) {
  return (
    <section className={style.trackingDetails}>
      <Row>
        <Col md={8}>
          <TrackingTable data={data.TransitEvents} />
        </Col>
        <Col md={4}>
          <TrackingAddress />
          <ReportProblem supportPhoneNumbers={data.SupportPhoneNumbers} />
        </Col>
      </Row>
    </section>
  );
}

export default TrackingDetails;
