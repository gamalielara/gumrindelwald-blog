import React from "react";
import { NextPage } from "next";
import CategoryPage from "<components>/pageComponent/CategoryPage";
import { Category } from "<utils>/constants";

const BookCategoryPage: NextPage = () => {
  return <CategoryPage category={Category.BOOK} />;
};

export default BookCategoryPage;
