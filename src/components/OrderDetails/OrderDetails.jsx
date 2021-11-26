import React from "react";
import OrderDetailsStyles from "./OrderDetails.module.css";

const OrderDetails = () => {
  return (
    <div className={`${OrderDetailsStyles.container} mt-30 mb-30`}>
      <p className="text text_type_digits-large mb-8">034536</p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <div className={`${OrderDetailsStyles.orderIcon} mb-15`} aria-label="Иконка подтверждения заказа"></div>
      <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails;
