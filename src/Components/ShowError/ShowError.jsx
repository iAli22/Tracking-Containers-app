import React from "react";
import style from "./ShowError.module.scss";
function ShowError({ errMessage }) {
  return (
    <div className={style.errorBox}>
      <h4>هنالك خطأ في رقم التتبع ، برجاء المحاولة مرة آخرى</h4>
    </div>
  );
}

export default ShowError;
