import styles from "./style.module.scss";

interface LogoInterface {
  fontColor: string;
  shouldAnimate?: boolean;
  isInLandingPage?: boolean;
}

const Logo: React.FC<LogoInterface> = ({
  fontColor,
  shouldAnimate = false,
  isInLandingPage,
}) => {
  return (
    <div
      {...{ color: fontColor }}
      className={`${styles.header} ${styles["logo"]} ${
        isInLandingPage ? styles["landingpage-logo"] : ""
      }`}
      data-should-animate={shouldAnimate}
    >
      g<div className={styles["main-text"]}>umrindel</div>
      <em className={styles["em-text"]}>
        w
        <span>
          <span>ald</span>
        </span>
      </em>
    </div>
  );
};

export default Logo;
