import React from "react";
import { NextPage } from "next";
import CategoryPage from "<components>/pageComponent/CategoryPage";
import { Category, MENUS } from "<utils>/constants";

const BookCategoryPage: NextPage = () => {
  return (
    <CategoryPage
      category={Category.TECHNOLOGY}
      route={MENUS[Category.TECHNOLOGY].url}
    />
  );
};

export default BookCategoryPage;
