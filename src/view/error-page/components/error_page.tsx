import React from "react";
import "../styles/error_page_styles.scss";

const ErrorPage = () => {
  return (
    <div className="error-page-content">
      <img
        style={{
          height: "auto",
          width: "60%",
        }}
        src={`${window.location.origin}/error_page.png`}
      />
      <p className="error-page-text" data-testid="errorMessage">
        "Oops , something went wrong"
      </p>
    </div>
  );
};

export default ErrorPage;
