import useCategories from "../../hooks/useCategories";
import Filter from "../../UI/Filter";
import FilterDropDown from "../../UI/FilterDropDown";

const sortOptions = [
  {
    value: "latest",
    label: "مرتب سازی (قدیمی ترین)",
  },
  {
    value: "earliest",
    label: "مرتب سازی (جدید ترین)",
  },
];

const statusOptions = [
  {
    value: "ALL",
    label: "همه",
  },
  {
    value: "OPEN",
    label: "باز",
  },
  {
    value: "CLOSED",
    label: "بسته",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="font-black text-xl">پروژه‌های شما</h1>
      <div className="flex gap-8 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: "دسته بندی (همه)",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
