import PropTypes from 'prop-types';

export const TranslateDashboard = ({ text, icon, title, color }) => {
  const colorClass =
    color === "blue"
      ? "bg-blue-100"
      : color === "white"
      ? "bg-white"
      : color === "green"
      ? "bg-green-100"
      : ""; 

  return (
    <div className="flex w-[28%] flex-col justify-between p-2 shadow-md bg-white rounded-md h-[200px]">
      <div className={`${colorClass} p-4 rounded-md`}>{icon}</div>
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span className="text-gray-600">{text}</span>
      </div>
    </div>
  );
};

TranslateDashboard.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
  color: PropTypes.string,
};
