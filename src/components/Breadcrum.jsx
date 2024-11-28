import { Link } from "react-router-dom";
const Breadcrum = ({ title = [] }) => {
  return (
    <>
      <div className="breadcrumbs text-sm py-5">
        <ul>
          {Array.isArray(title) &&
            title.length > 0 &&
            title.map((item,index) => {
              return (
                <>
                  <li>
                    <Link to={''}>{title[index]} </Link>
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Breadcrum;
