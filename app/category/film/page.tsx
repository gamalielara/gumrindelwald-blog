import React from "react";
import { NextPage } from "next";
import CategoryPage from "<components>/pageComponent/CategoryPage";
import { Category, MENUS } from "<utils>/constants";

const BookCategoryPage: NextPage = () => {
  return (
    <CategoryPage category={Category.FILM} route={MENUS[Category.FILM].url} />
  );
};

export default BookCategoryPage;
