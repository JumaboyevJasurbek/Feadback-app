import TypeBadge from "../type-badge/type-badge";

import "./type-filter.scss";

const typesList = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 4,
    name: "UI",
  },
  {
    id: 3,
    name: "UX",
  },
  {
    id: 2,
    name: "Enhancement",
  },
  {
    id: 6,
    name: "Bug",
  },

  {
    id: 5,
    name: "Feature",
  },
];

const TypeFilter = () => {
  return (
    <form className="type-filter">
      {typesList.map((type) => (
        <label key={type.id} className="type-filter__label">
          <input
            defaultChecked
            className="visually-hidden type-filter__radio"
            type="radio"
            name="type"
          />
          <TypeBadge className="type-filter__styled-radio">
            {type.name}
          </TypeBadge>
        </label>
      ))}
    </form>
  );
};

export default TypeFilter;
