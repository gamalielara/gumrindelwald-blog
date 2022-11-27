import styles from "./style.module.css"
import React from "react";

interface LogoInterface {
    fontColor: string;
    letterSpacing?: number;
    isHeader?: boolean;
}

const Logo: React.FC<LogoInterface> = ({fontColor, letterSpacing, isHeader}) => {
    return (
        <div
            className={`${isHeader ? styles.header : styles.title } text-${fontColor} flex items-end w-fit m-auto font-bold space-x-${letterSpacing || 0.5}`}>
            g
            <div className="main-text overflow-hidden inline-block animate-mainTextAnimation">umrindel</div>
            <em className="flex">w
                <span className="italic overflow-hidden animate-italicTextAnimation">
                    <span className="main-word pr-2.5">ald</span>
                </span>
            </em>
        </div>
    )
}

export default Logo