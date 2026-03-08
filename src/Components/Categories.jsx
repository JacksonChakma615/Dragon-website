import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categoris = use(categoriesPromise);
  return (
    <div>
      <h2 className="font-bold"> ALl categories {categoris.length}</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categoris.map((categorory) => (
          <NavLink className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent" to={`/category/${categorory.id}`} key={categorory.id} >{categorory.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
