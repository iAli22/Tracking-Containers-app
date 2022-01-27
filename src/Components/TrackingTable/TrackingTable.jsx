import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";
import { convertToArabic, getCurrentColor } from "../../utils/helpers";
import style from "./TrackingTable.module.scss";

function TrackingTable({ data }) {
  return (
    <div>
      <h6 className="mb-4">تفاصيل الشحنة</h6>
      <Table className={style.table} responsive="sm">
        <thead>
          <tr>
            <th>الفرع</th>
            <th>التاريخ</th>
            <th>الوقت</th>
            <th>تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{convertToArabic(item.hub) || "_"}</td>
              <td>{moment(item.timestamp).format("YYYY-MM-DD")}</td>
              <td>{moment(item.timestamp).format("hh:mma")}</td>
              <td>
                {convertToArabic(item.state)}

                {item?.reason && (
                  <>
                    <br />
                    <span
                      style={{
                        color: getCurrentColor(data.CurrentStatus.state),
                      }}
                    >
                      {item?.reason}
                    </span>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TrackingTable;
