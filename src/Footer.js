import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="footer p-2">
        This project was coded by Maria Botiş and is{" "}
        <a
          href="https://github.com/maria-miruna/weather-react"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://papaya-phoenix-e8a792.netlify.app/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
