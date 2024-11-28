
export const TranslateDashboard = ({text, icon, title }) => {
  return (
    <div className="flex w-[28%] flex-col justify-between p-2 shadow-md bg-white rounded-md h-[200px]">
      <div>{icon}</div>
      <div className="flex flex-col">
        <span>{title}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}

