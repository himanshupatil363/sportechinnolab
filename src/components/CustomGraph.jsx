const CustomGraph = ({ data }) => {
  return (
    <div className="flex justify-between">
      {Object.keys(data).map((currentData, key) => (
        <div className="flex flex-col items-center justify-end" key={key}>
          <div key={key} className="h-7 w-7 bg-black text-white flex justify-center items-center rounded-full border border-black">
            {data[currentData]}
          </div>
          {Array(data[currentData] - 1)
            .fill(0)
            .map((key) => (
              <div
                key={key}
                className="h-7 w-7 rounded-full border border-black"
              ></div>
            ))}
          {currentData}
        </div>
      ))}
    </div>
  );
};

export default CustomGraph;
