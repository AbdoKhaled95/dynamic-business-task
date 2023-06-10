import React, { useEffect } from "react";
import "./NotFound.css";
const Notfound = () => {
  useEffect(() => {
    document.title = "Page not found";
  });

  return (
    <section id="not-found">
      <p className="title">Page not found</p>
      <p className="description"> We couldn't find what you were looking for</p>
    </section>
  );
};

export default Notfound;
