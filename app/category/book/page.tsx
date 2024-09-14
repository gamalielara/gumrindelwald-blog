import React from "react";
import { NextPage } from "next";
import CategoryPage from "<components>/pageComponent/CategoryPage";
import { Category, MENUS } from "<utils>/constants";

const BookCategoryPage: NextPage = () => {
  return (
    <CategoryPage category={Category.BOOK} route={MENUS[Category.BOOK].url} />
  );
};

export default BookCategoryPage;
