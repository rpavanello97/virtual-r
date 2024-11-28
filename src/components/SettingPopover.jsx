import React, { useState } from "react";
import { X, BookA } from "lucide-react";
import { labels } from "../constants";

const SettingPopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className="p-2  rounded-full"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <BookA size={24} />}
      </button>

      {/* Popover Menu */}
      {isOpen && (  
        <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">              
              {labels.settingsPopover.english}
            </li>  
            <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">              
              {labels.settingsPopover.portuguese}
            </li>         
          </ul>
        </div>
      )}
    </div>
  );
};

export default SettingPopover;