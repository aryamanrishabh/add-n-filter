const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="m-4 text-center">
      <span>
        Search:{" "}
        <input
          value={filter || ""}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
