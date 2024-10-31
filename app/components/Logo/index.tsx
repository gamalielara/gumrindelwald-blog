import styles from "./style.module.scss";

interface LogoInterface {
  shouldAnimate?: boolean;
  isInLandingPage?: boolean;
  minimize?: boolean;
}

const Logo: React.FC<LogoInterface> = ({
  shouldAnimate = false,
  minimize = false,
  isInLandingPage,
}) => {
  return (
    <div
      className={`${styles.header} ${styles["logo"]} ${
        isInLandingPage ? styles["landingpage-logo"] : ""
      }`}
      data-should-animate={shouldAnimate}
    >
      g{!minimize && <div className={styles["main-text"]}>umrindel</div>}
      <em className={styles["em-text"]}>
        w
        {!minimize && (
          <span>
            <span>ald</span>
          </span>
        )}
      </em>
    </div>
  );
};

export default Logo;
