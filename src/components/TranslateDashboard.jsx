import PropTypes from 'prop-types';
import { useContext} from 'react';
import { TranslatorDashboardContext } from '../context/TranslatorDashboardContext';

export const TranslateDashboard = ({ids, text, icon, title, color }) => {
  const {setId, isClicked, setIsClicked} = useContext(TranslatorDashboardContext);
  const handleClick = () => {
    setIsClicked(!isClicked);
    setId(ids)
  }
  
  const colorClass =
    color === "#daf4fe"
      ? "#daf4fe"
      : color === "#f8e3f8"
      ? "#f8e3f8"
      : color === "#f8e5ce"
      ? "#f8e5ce"
      : ""; 

  return (
    <div className='flex relative w-full md:w-[30%] h-max'>
    <div className="flex w-[100%] flex-col justify-between duration-500 ease-in-out cursor-pointer active:scale-75 p-4 shadow-md bg-white rounded-md h-[300px] md:h-[200px]" onClick={handleClick}>
      <div className={`${colorClass == '#daf4fe' ? "bg-[#daf4fe] text-[#32c5ff]" : colorClass == '#f8e3f8' ? 'bg-[#ffc7ff] text-[#fd2dfd]' : colorClass == '#f8e5ce' ? 'bg-[#fcdcb5] text-[#ffa230]' : ''}  w-12 h-12 rounded-full flex justify-center items-center text-[22px] font-semibold`}>{icon}</div>
      <div className="flex flex-col">
        <span className="font-bold text-[18px]">{title}</span>
        <span className="text-gray-600 text-[13px]">{text}</span>
      </div>
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
