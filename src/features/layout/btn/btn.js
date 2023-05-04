import styles from "./style.module.css";

export default function Button(props) {
  return (
    <div className="col-3">
      <div className={`${styles.snippet}`}>
        <div className="stage">
          <div className={`${styles.dotFloating}`}></div>
        </div>
      </div>
    </div>
  );
}
