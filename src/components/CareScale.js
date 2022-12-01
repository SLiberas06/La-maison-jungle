import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const quantityLabel = {
    1: "peu",
    2: "modérément",
    3: "beaucoup",
  };
  const range = [1, 2, 3];

  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" onClick={() => handleClick(careType)} />
    );

  return (
    <div onClick={() => handleClick(careType)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );

  function handleClick(scaleType) {
    alert(
      `Cette plante resquiert ${quantityLabel[scaleValue]} ${
        careType === "light" ? "de lumière" : "d'arrosage"
      }`
    );
  }
}

export default CareScale;
