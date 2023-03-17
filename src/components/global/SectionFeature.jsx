import React from "react";

const SectionFeature = ({ icon, title, textBody }) => {
  return (
    <div className="px-2 cursor-pointer">
      <div className="mb-8 md:p-8 p-5 md:px-7 xl:px-10 flex flex-col md:items-start items-center">
        <div className="mb-2.5 md:mb-8 flex items-center justify-center">
          {icon}
        </div>
        <h4 className="text-gray-900 dark:text-gray-100 mb-2.5 md:mb-3 text-lg font-semibold capitalize">
            {title}
        </h4>
        <p className="text-gray-500 dark:text-gray-300 md:text-start text-center">{textBody}</p>
      </div>
    </div>
  );
};

export default SectionFeature;
