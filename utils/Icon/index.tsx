import { NextComponentType } from "next";
import Call from "../../public/assets/icons/call.svg";
import Chat from "../../public/assets/icons/chat.svg";
import Copy from "../../public/assets/icons/copy.svg";
import Download from "../../public/assets/icons/download.svg";
import Facebook from "../../public/assets/icons/facebook.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Message from "../../public/assets/icons/message.svg";
import Phone from "../../public/assets/icons/phone.svg";
import Play from "../../public/assets/icons/play.svg";
import Send from "../../public/assets/icons/send.svg";
import Star from "../../public/assets/icons/star.svg";
import Success from "../../public/assets/icons/success.svg";
import Thumbs from "../../public/assets/icons/thumbs.svg";
import Twitter from "../../public/assets/icons/twitter.svg";
import Video from "../../public/assets/icons/video.svg";
import Youtube from "../../public/assets/icons/youtube.svg";

import Image from 'next/image'

type IconProps =
  | "call"
  | "copy"
  | "download"
  | "facebook"
  | "instagram"
  | "message"
  | "phone"
  | "play"
  | "send"
  | "star"
  | "success"
  | "thumbs"
  | "twitter"
  | "video"
  | "youtube";

const iconImg = {
  call: Call,
  copy: Copy,
  chat: Chat,
  download: Download,
  facebook: Facebook,
  instagram: Instagram,
  message: Message,
  phone: Phone,
  play: Play,
  send: Send,
  star: Star,
  success: Success,
  thumbs: Thumbs,
  twitter: Twitter,
  video: Video,
  youtube: Youtube,
};

const Icon: React.FC = () => {

  return (
   <Image
   src={iconImg.call} 
   alt={`A ${iconImg} icon`}/>
  )
}

export default Icon
