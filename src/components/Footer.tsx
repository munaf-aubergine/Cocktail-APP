import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="footer bg-dark text-white">
      <div className="container text-center footer-content">
        <h3>Design and Developed by : Munaf Divan</h3>
        <p className="m-0">All Right Reserved by &copy; MunafDivan</p>
      </div>
    </div>
  );
};

export default Footer;
