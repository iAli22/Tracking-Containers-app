import React, { useEffect, useState } from "react";
import style from "./TrackingTimeLine.module.scss";
import createdIcon from "../../Assets/Icons/created.svg";
import toDeliverIcon from "../../Assets/Icons/toDeliver.svg";
import getedIcon from "../../Assets/Icons/geted.svg";
import completed from "../../Assets/Icons/completed.svg";
import done from "../../Assets/Icons/done.svg";
import { Image } from "react-bootstrap";
import { convertToArabic, getCurrentColor } from "../../utils/helpers";
import moment from "moment";
import "moment/locale/ar-ma";
moment.locale("ar");

function TrackingTimeLine({ data }) {
  const circles = document.getElementsByClassName(`${style.circle}`);
  const [currentBarValue, setCurrentBarValue] = useState(0);

  let statusValues = {
    TICKET_CREATED: 0,
    PACKAGE_RECEIVED: 1,
    OUT_FOR_DELIVERY: 2,
    DELIVERED: 3,
  };

  useEffect(() => {
    const filteredCircles = [...circles].filter(
      (item) =>
        Object.values(item.dataset)[0].toUpperCase() <=
        statusValues[data.CurrentStatus.state]
    );

    filteredCircles.map((item) => {
      if (
        data.CurrentStatus.state === Object.keys(item.dataset)[0].toUpperCase()
      ) {
        item.style.backgroundColor = getCurrentColor(data.CurrentStatus.state);
        let itemStyle = window.getComputedStyle(item);
        setCurrentBarValue(itemStyle.getPropertyValue("right"));
      } else {
        item.style.width = "30px";
        item.style.height = "30px";
        item.style.backgroundColor = getCurrentColor(data.CurrentStatus.state);
        item.childNodes[0].src = done;
        item.childNodes[0].style.width = "20px";
        item.childNodes[0].style.height = "20px";

        if (Object.keys(item.dataset)[0] === "out_for_delivery") {
          item.childNodes[0].style.webkitTransform = "";
        }
      }
    });
  }, [data, circles]);

  return (
    <section className={style.timeLine}>
      <div className={style.timeLine__info}>
        <div className={style.timeLine__info_box}>
          <h6>
            رقم الشحنة
            <span> {data.TrackingNumber}</span>
          </h6>
          <h4
            style={{
              color: getCurrentColor(data.CurrentStatus.state),
            }}
          >
            {convertToArabic(data.CurrentStatus.state)}
          </h4>
        </div>
        <div className={style.timeLine__info_box}>
          <h6>اخر تحديث </h6>
          <h4>{moment(data.CurrentStatus.timestamp).format("LLLLa")}</h4>
        </div>
        <div className={style.timeLine__info_box}>
          <h6>اسم التاجر</h6>
          <h4>_</h4>
        </div>
        <div className={style.timeLine__info_box}>
          <h6>موعد تسلم الشحنة</h6>
          <h4>
            {moment(data.PromisedDate || data.CurrentStatus.timestamp).format(
              "LL"
            )}
          </h4>
        </div>
      </div>
      <div className={style.timeLine__progress}>
        <div className={style.bar}>
          {/* ${style.done} */}
          <div className={`${style.circle}`} data-ticket_created={0}>
            <Image
              src={createdIcon}
              style={{
                width: "30px",
              }}
            />
          </div>
          <div className={`${style.circle} `} data-package_received={1}>
            <Image
              src={getedIcon}
              style={{
                width: "30px",
              }}
            />
          </div>
          <div className={`${style.circle}`} data-out_for_delivery={2}>
            <Image
              src={toDeliverIcon}
              style={{
                width: "30px",
                transform: "rotate3d(0, -10, 0, 180deg)",
              }}
            />
          </div>
          <div className={`${style.circle}`} data-delivered={3}>
            <Image
              src={completed}
              style={{
                width: "30px",
              }}
            />
          </div>

          <div className={style.circleText}>
            <span>تم إنشاء الشحنة</span>
          </div>
          <div className={style.circleText}>
            <span>تم إستلام الشحنة من التاجر</span>
            <span> </span>
            {/* <span className={style.error}>بسم الله الرحمن الرحيم</span> */}
          </div>
          <div className={style.circleText}>
            <span>الشحنة خرجت للتسليم</span>
            {/* <span className={style.warning}>بسم الله الرحمن الرحيم</span> */}
          </div>
          <div className={style.circleText}>
            <span>تم التسليم</span>
          </div>

          {/* fill */}
          <div
            className={style.fill}
            style={{
              width: currentBarValue,
              backgroundColor: getCurrentColor(data.CurrentStatus.state),
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default TrackingTimeLine;
