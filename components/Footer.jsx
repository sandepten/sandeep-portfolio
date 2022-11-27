import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import { theme } from "../utilities/themeFunc";

export default function Footer() {
  return (
    <div className="">
      <div className="flex justify-evenly">
        <GithubLogo
          onClick={() => {
            window.open("https://github.com/sandepten", "_blank");
          }}
          size={32}
          color={theme}
        />
        <LinkedinLogo
          onClick={() => {
            window.open("https://www.linkedin.com/in/sandepten", "_blank");
          }}
          size={32}
          color={theme}
        />
        <InstagramLogo
          onClick={() => {
            window.open("https://instagram.com/sandepten1", "_blank");
          }}
          size={32}
          color={theme}
        />
        <TwitterLogo
          onClick={() => {
            window.open("https://twitter.com/sandepten", "_blank");
          }}
          size={32}
          color={theme}
        />
      </div>
      <div className="py-8 text-center text-dark">
        <p>Build by Sandeep Kumar</p>
        <p>Inspired from Brittany Chiang</p>
      </div>
    </div>
  );
}
