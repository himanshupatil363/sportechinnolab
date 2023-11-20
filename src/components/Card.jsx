const Card = ({ logo, title, subtitle, result, varient }) => {
  return (
    <div className="flex flex-col bg-[#f2eae5] rounded-lg p-3">
      <div className={varient}>{logo}</div>
      <div className="text-sm font-normal text-[#797979]">{title}</div>
      <div className="text-2xl my-2">{subtitle}</div>
      <div className="text-xs mb-4">{result}</div>
    </div>
  );
};

export default Card;
