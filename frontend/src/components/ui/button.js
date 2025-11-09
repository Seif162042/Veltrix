'use client';

export default function Button({onOpen, text, icon, border, size, className = ""}) {

  return (
    <button 
      size={size}
      onClick={onOpen}
      className={`${ border ? "border border-blue-500 hover:bg-blue-600 text-blue-500 hover:text-white" : "border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white"}  
      ${ size == "sm" ? "text-sm rounded-md px-2 py-2" : "text-base rounded-lg px-4 py-4" }
      rounded-xl font-medium cursor-default hover:scale-105 transition-all duration-200 transform hover:cursor-pointer size-fit shadow-lg text-base
      ${className}
      `}
    >
      {icon ? (<div className="flex flex-row gap-2">
                <div className="flex items-center">{icon}</div>
                <div>{text}</div>
              </div>)
      :(<div>{text}</div>)}
      
           
    </button>
  );
}
