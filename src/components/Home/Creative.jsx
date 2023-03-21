import React from "react";
import { TiTick } from "react-icons/ti";

const Creative = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="lg:w-[1000px] w-full mx-auto px-3 grid lg:grid-cols-2 grid-cols-1 gap-3 justify-items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl font-semibold">
            Get Creative With Learn with Mahin
          </h1>
        </div>

        <div>
          <div className="flex items-center gap-2 py-2">
            <div>
              <TiTick className="w-6 h-6 rounded-full text-xs text-white bg-green-500" />
            </div>
            <span className="text-2xl font-bold">
              Learn creative Programming skills to achieve your personal and
              professional goals.
            </span>
          </div>

          <div className="flex items-center gap-2 py-2">
            <div>
              <TiTick className="w-6 h-6 rounded-full text-xs text-white bg-green-500" />
            </div>
            <span className="text-2xl font-bold">
              Tune in and level up at your own pace.
            </span>
          </div>

          <div className="flex items-center gap-2 py-2">
            <div>
              <TiTick className="w-6 h-6 rounded-full text-xs text-white bg-green-500" />
            </div>
            <span className="text-2xl font-bold">
              Go from dabbler to master in a matter of hours.
            </span>
          </div>

          <div className="flex items-center gap-2 py-2">
            <div>
              <TiTick className="w-6 h-6 rounded-full text-xs text-white bg-green-500" />
            </div>
            <span className="text-2xl font-bold">
              Connect with a global community of curious creatives.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
