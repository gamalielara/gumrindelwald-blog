import React from "react";
import { Category } from "../../utils/vars";
import Link from "next/link";

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
      <a className="inline-block rounded bg-black text-white text-sm lg:text-base my-2 w-fit px-2 p-1 hover:cursor-pointer flex items-center">
        {children}
      </a>
    </Link>
  );
};

export default CategoryBox;
