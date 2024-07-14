import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Category } from "<utils>/constants";

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
    <Link
      href={categoryLinks[category] ?? ""}
      className={styles["category-tag-wrapper"]}
    >
      {children}
    </Link>
  );
};

export default CategoryBox;
