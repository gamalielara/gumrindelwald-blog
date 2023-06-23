import React from "react";
import { Category } from "../../utils/vars";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Prop {
  children: any;
  category: Category;
}

const CategoryBox: React.FC<Prop> = ({ children, category }) => {
  const categoryLinks = {
    [Category.BOOK]: "/category/book",
    [Category.FILM]: "/category/film",
    [Category.PERSONAL_THOUGHTS]: "/category/personal",
    [Category.TECHNOLOGY]: "/category/tech",
  };

  return (
    <Link href={categoryLinks[category] ?? ""}>
      <a className={styles["category-tag-wrapper"]}>{children}</a>
    </Link>
  );
};

export default CategoryBox;
