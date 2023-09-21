import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="footer p-2">
        <a
          href="https://github.com/maria-miruna/weather-app"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Maria Botiş
      </p>
    </div>
  );
}
