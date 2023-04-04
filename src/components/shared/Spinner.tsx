import * as React from "react";

interface ISpinnerProps {}

const Spinner: React.FunctionComponent<ISpinnerProps> = (props) => {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
