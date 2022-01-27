import React from "react";
import style from "./TrackingAddress.module.scss";
function TrackingAddress() {
  return (
    <div>
      <h6 className="mb-4">عنوان التسليم</h6>
      <div className={style.addressBox}>
        <p>
          أمبابة شارع طلعت حرب مدينة العمال بحوار البرنس منزل ١٧ بلوك ٣٣ القاهرة
        </p>
      </div>
    </div>
  );
}

export default TrackingAddress;
