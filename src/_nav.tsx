import {
  AiOutlineBarChart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineWechat,
  AiFillQuestionCircle,
} from "react-icons/ai";

export const _nav = [
  {
    name: "Dashboard",
    icon: AiOutlineBarChart,
    url: "/",
  },
  {
    name: "Liveview",
    icon: AiOutlineShoppingCart,
    url: "/liveview",
  },
  {
    name: "Account",
    icon: AiOutlineUser,
    url: "/account",
  },
  {
    name: "Settings",
    icon: AiOutlineSetting,
    url: "/settings",
  },
  {
    name: "Support",
    child: [
      { icon: AiOutlineWechat, name: "Chat", url: "/chat" },
      { icon: AiFillQuestionCircle, name: "FAQ", url: "/faq" },
    ],
  },
];
