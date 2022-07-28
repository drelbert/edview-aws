import { useState } from "react";

const TALENT = [
  {
    category: "Designer",
    skills: "UX, prototyping",
    available: true,
    name: "Apple",
  },
  {
    category: "Designer",
    skills: "MVP, UX, JavaScript",
    available: true,
    name: "Maja",
  },
  { category: "Designer", skills: "HCD, UI", available: false, name: "Elo" },
  {
    category: "Developer",
    skills: "JavaScript",
    available: true,
    name: "Mike",
  },
  { category: "Developer", skills: "Node.js", available: false, name: "Tam" },
  {
    category: "Developer",
    skills: "Next.js, JavaScript",
    available: true,
    name: "Fritz",
  },
  {
    category: "Finance",
    skills: "Tax, audit",
    available: true,
    name: "Lea",
  },
];

export default function FindTalent() {
  return <SearchAndFilter TALENT={TALENT} />;
}

function SearchAndFilter({ TALENT }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        TALENT={TALENT}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.available ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td className="border-2 ">{name}</td>
      <td className="border-2">{product.skills}</td>
    </tr>
  );
}

function ProductTable({ TALENT, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  TALENT.forEach((product) => {
    if (
      product.category.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.available) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="border-separate border-spacing-2  border-2 ">
      <thead>
        <tr>
          <th className="border-2 pr-14">Name</th>
          <th className="border-2 pr-32">Specific Skill(s)</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form className="">
      <input
        className="border-2 pr-14 mb-4 mr-60"
        type="text"
        value={filterText}
        placeholder="Search Skills..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          className="mb-4"
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show employees available.
      </label>
    </form>
  );
}
