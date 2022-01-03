import React from "react";
import PropTypes from 'prop-types';
import IngredientDetailsStyles from "./IngredientDetails.module.css";

const IngredientDetails = (props) => {
  const itemToModal = props.data.filter((item) => item._id === props.id)[0];

  return (
    <div className={`${IngredientDetailsStyles.container} mt-10 mb-15`}>
      <h3 className={`${IngredientDetailsStyles.title} text text_type_main-large`}>Детали ингредиента</h3>
      <img className="mb-4" src={itemToModal.image_large} alt={itemToModal.name} />
      <p className="text text_type_main-medium mb-8">{itemToModal.name}</p>
      <div className={IngredientDetailsStyles.facts}>
        <div className={IngredientDetailsStyles.factWide}>
          <p className="text text_type_main-default text_color_inactive mb-2">Калории,ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{itemToModal.calories}</p>
        </div>
        <div className={IngredientDetailsStyles.factNarrow}>
          <p className="text text_type_main-default text_color_inactive mb-2">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{itemToModal.proteins}</p>
        </div>
        <div className={IngredientDetailsStyles.factNarrow}>
          <p className="text text_type_main-default text_color_inactive mb-2">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{itemToModal.fat}</p>
        </div>
        <div className={IngredientDetailsStyles.factNarrow}>
          <p className="text text_type_main-default text_color_inactive mb-2">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{itemToModal.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}

IngredientDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
}

export default IngredientDetails;
