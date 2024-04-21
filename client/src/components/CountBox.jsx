import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] shadow-gray-400  shadow-sm  p-3  rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-normal text-[16px] text-white bg-[#8c6dfd] px-3 py-2 w-full rouned-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default CountBox