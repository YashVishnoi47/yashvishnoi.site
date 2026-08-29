import React from "react";

const PropsTable = ({ component }) => {
  return (
    <div className="w-full min-h-fit flex gap-6 flex-col justify-start items-start">
      <p className="text-[24px] font-head text-main-text tracking-tight leading-tight font-medium">
        Props
      </p>

      <div className="w-full grid grid-cols-4 justify-center items-center">
        <div className="col-span-4 grid grid-cols-1 sm:grid-cols-5 h-auto sm:h-10 bg-card-bg border-b border-main-border">
          <p className="col-span-1 flex justify-start px-2 items-center text-[14px] font-label text-faint-text">
            Name
          </p>

          <p className="col-span-1 flex justify-start px-2 items-center text-[14px] font-label text-faint-text">
            Type
          </p>

          <p className="col-span-1 flex justify-start px-2 items-center text-[14px] font-label text-faint-text">
            Default
          </p>

          <p className="col-span-1 sm:col-span-2 flex justify-start px-2 items-center text-[14px] font-label text-faint-text">
            Description
          </p>
        </div>

        <div className="col-span-4 grid grid-cols-1 sm:grid-cols-5 h-auto sm:h-18 pt-4 justify-start items-start borderb border-main-border">
          <p className="col-span-1 flex justify-start px-2 items-center text-[16px] font-label font-medium text-main-text">
            PropName
          </p>

          <p className="col-span-1 flex justify-start px-2 items-center text-[16px] font-label text-sec-text">
            Primary
          </p>

          <p className="col-span-1 flex justify-start bg-accent-tint px-2 items-center text-[16px] font-label text-accent-main w-fit">
            Default
          </p>

          <p className="col-span-1 sm:col-span-2 flex justify-start px-2 items-center text-[16px] text-sec-text">
            This is the DESC
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropsTable;
