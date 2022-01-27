import React from "react";
import { Image } from "react-bootstrap";
import style from "./ReportProblem.module.scss";
import problemIcon from "../../Assets/Icons/customer-problem.svg";
function ReportProblem({ supportPhoneNumbers }) {
  return (
    <div className={style.reportProblem}>
      <Image src={problemIcon} fluid />
      <div className={style.reportProblem__text}>
        <p>هل توجد مشكلة في شحنتك؟!</p>
        <a href={`tel:${supportPhoneNumbers[0]}`}>إبلاغ عن مشكلة</a>
      </div>
    </div>
  );
}

export default ReportProblem;
