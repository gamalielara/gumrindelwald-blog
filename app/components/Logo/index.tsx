import styles from "./style.module.scss";

interface LogoInterface {
  fontColor: string;
  isHeader?: boolean;
}

const Logo: React.FC<LogoInterface> = ({ fontColor, }) => {
  return (
    <div
      { ...{ color: fontColor } }
      className={ `${ styles.header } ${ styles["logo"] }` }
    >
      g
      <div className={ styles["main-text"] }>umrindel</div>
      <em className={ styles["em-text"] }>
        w
        <span>
          <span>ald</span>
        </span>
      </em>
    </div>
  );
};

export default Logo;
