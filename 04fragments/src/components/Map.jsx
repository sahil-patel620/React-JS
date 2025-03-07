import styles from "./Map.module.css";
function Map() {
  let foodItems = [
    "Dal",
    "Roti",
    "vegetables",
    "Fruits",
    "Salad",
    "Milk",
    "Ghee",
  ];
  
  return (
    <>
      <h4 className={styles.header}>Foods using Map</h4>
      <p className={styles["para-css"]}>
        When rendering lists in React, we use .map() inside JSX to dynamically
        generate elements.
        <br />
        <b>Key Prop:</b> When using .map() in React, always provide a unique key
        prop to each item to help React efficiently update the UI.
      </p>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Map;
