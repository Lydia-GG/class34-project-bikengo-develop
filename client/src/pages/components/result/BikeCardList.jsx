import React from "react";
import BikeCard from "../../../components/bikeCard/BikeCard";
import PropTypes from "prop-types";
const BikeCardList = ({ bikeResult }) => {
  return (
    <div className="my-10">
      <div className="w-full flex flex-wrap justify-center">
        {bikeResult.map((bike) => {
          return (
            <BikeCard
              email={bike.email}
              img={bike.photos[0]}
              title={bike.title}
              brand={bike.brand.value}
              type={bike.type.value}
              price={bike.price}
              key={bike._id}
              id={bike._id}
              sellFaster={bike.sellFaster}
            />
          );
        })}
      </div>
    </div>
  );
};
BikeCardList.propTypes = {
  bikeResult: PropTypes.array.isRequired,
};
export default BikeCardList;
