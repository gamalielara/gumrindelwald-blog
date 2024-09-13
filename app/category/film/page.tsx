import React from "react";
import { NextPage } from "next";
import CategoryPage from "<components>/pageComponent/CategoryPage";
import { Category } from "<utils>/constants";

export const dynamic = "force-static";

const BookCategoryPage: NextPage = () => {
  return <CategoryPage category={Category.FILM} />;
};

export default BookCategoryPage;
