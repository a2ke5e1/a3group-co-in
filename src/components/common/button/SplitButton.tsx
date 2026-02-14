// import { Dropdown, type MenuProps } from "antd";
// import { ChevronDown } from "lucide-react";
// import { useState } from "react";
// import BaseButton from "../button/BaseButton";
// import { ButtonDefaults } from "../button/ButtonDefaults";
// import { SplitButtonDefaults } from "./SplitButtonDefaults";

// const SplitButton = ({
//   onClick,
//   label,
//   disable = false,
//   trialButtonMenu,
//   disableLeadingButton = false,
//   disableTrailButton = false,
//   trail_width = 48,
//   total_width = 175,
//   total_height = 40,
//   variant = "primary",
// }: {
//   onClick: () => void;
//   disable?: boolean;
//   label: React.ReactNode;
//   trialButtonMenu?: MenuProps;
//   disableLeadingButton?: boolean;
//   disableTrailButton?: boolean;
//   total_width?: number;
//   trail_width?: number;
//   total_height?: number;
//   variant?: "primary" | "outlined";
// }) => {
//   const [open, setOpen] = useState(false);

//   const colors =
//     variant === "outlined"
//       ? ButtonDefaults.outlinedColors()
//       : ButtonDefaults.filledColors();
//   const border =
//     variant === "outlined"
//       ? {
//           width: 1,
//           color: "var(--md-sys-color-outline-variant)",
//         }
//       : undefined;

//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: 2,
//         width: total_width,
//       }}
//     >
//       {/* Leading button */}
//       <BaseButton
//         onClick={onClick}
//         enabled={!disable && !disableLeadingButton}
//         width={total_width - trail_width}
//         height={total_height}
//         padding="0 16px"
//         shape={SplitButtonDefaults.leadingShape(open)}
//         colors={colors}
//         border={border}
//       >
//         {label}
//       </BaseButton>

//       {/* Trailing button – menu behavior UNCHANGED */}
//       <Dropdown
//         open={open}
//         onOpenChange={setOpen}
//         menu={trialButtonMenu}
//         placement="topRight"
//         trigger={["click"]}
//         disabled={disable || disableTrailButton}
//       >
//         <div>
//           <BaseButton
//             enabled={!disableTrailButton && !disable}
//             width={trail_width}
//             height={total_height}
//             padding={0}
//             shape={SplitButtonDefaults.trailingShape(
//               open,
//               trail_width,
//               total_height,
//             )}
//             colors={colors}
//             border={border}
//           >
//             <ChevronDown
//               size={22}
//               style={{
//                 transition: "transform 200ms ease",
//                 transform: open ? "rotate(180deg)" : "rotate(0deg)",
//               }}
//             />
//           </BaseButton>
//         </div>
//       </Dropdown>
//     </div>
//   );
// };

// export default SplitButton;
