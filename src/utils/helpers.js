export const convertToArabic = (key) => {
  switch (key) {
    case "TICKET_CREATED":
      return "تم إنشاء الشحنة";
    case "PACKAGE_RECEIVED":
      return "تم إستلام الشحنة من التاجر";
    case "OUT_FOR_DELIVERY":
      return "الشحنة خرجت للتسليم";
    case "DELIVERED":
      return "تم تسليم الشحنة";
    case "IN_TRANSIT":
      return "تحركت الشحنة";
    case "NOT_YET_SHIPPED":
      return "لم يتم شحنها بعد";
    case "WAITING_FOR_CUSTOMER_ACTION":
      return "التوقف بسبب قرار العميل";
    case "RECEIVED_DELIVERY_LOCATION":
      return "استلام موقع الشحنة";

    // Hub
    case "Mohandseen Hub":
      return "المهندسين";
    case "Alexandria Hub":
      return "الأسكندرية";
    case "Cairo Sorting Facility":
      return "القاهرة";
    case "Tanta Hub":
      return "طنطا";

    default:
      return "";
  }
};
export const getCurrentColor = (status) => {
  switch (status) {
    case "DELIVERED":
      return "green";
    case "NOT_YET_SHIPPED":
    case "DELIVERED_TO_SENDER":
      return "yellow";
    case "CANCELED":
      return "red";

    default:
      return "#3e465d";
  }
};
