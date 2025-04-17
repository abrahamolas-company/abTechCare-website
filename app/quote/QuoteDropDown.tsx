// 'use client'
// import { useRef, useState } from "react";
// import { Icons } from "../components/ui/icons";
// import useOuterClick from "../components/hooks/useOuterClick";

// type Props = {
//   label: string;
//   options: string[]
// }

// export const Dropdown = ({ label, options }: Props) => {
//   const [selectedOption, setSelectedOption] = useState<string>(label);
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useOuterClick(dropdownRef, setIsOpen);

//   return (
//     <div className="relative w-full" ref={dropdownRef}>
//       <button
//       type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full border-[1px] border-[#211D1D] rounded-md p-3 flex items-center justify-between bg-white"
//       >
//         <span>{selectedOption}</span>
//         <span
//           className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
//             }`}
//         >
//           <Icons.DownWardArrow />
//         </span>
//       </button>

//       {isOpen && (
//         <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 setSelectedOption(option);
//                 setIsOpen(false);
//               }}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


'use client'
import { useRef, useState } from "react";
import { Icons } from "../components/ui/icons";
import useOuterClick from "../components/hooks/useOuterClick";

type Props = {
  label: string;
  options: string[];
  onSelect?: (option: string) => void;
  selectedOption?: string;
}

export const Dropdown = ({ label, options, onSelect, selectedOption }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOuterClick(dropdownRef, setIsOpen);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-[1px] border-[#211D1D] rounded-md p-3 flex items-center justify-between bg-white"
      >
        <span>{selectedOption || label}</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <Icons.DownWardArrow />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full overflow-y-auto max-h-[250px] bg-white border border-gray-300 rounded-md shadow-lg mt-1">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                if (onSelect) onSelect(option);
                setIsOpen(false);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};