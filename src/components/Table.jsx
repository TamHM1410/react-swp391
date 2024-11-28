const Table = ({ title = [], data = [] }) => {
  return (
    <div className="card shadow-xl bg-base-100 w-full h-full px-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {Array.isArray(title) &&
                title.length > 0 &&
                title.map((item, index) => {
                  return (
                    <>
                      <th key={index}>{item}</th>
                    </>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.length > 0 &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object.entries(item).map(([key, value]) => {
                      return <th key={key}>{value}</th>;
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
