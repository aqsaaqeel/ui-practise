export const Navbar = () => {
  return (
    <div>
      <div className="dashboard-header">
        <div className="frame-parent">
          <div className="dashboard-wrapper">
            <div className="dashboard">Payments</div>
          </div>
          <div className="how-to-use">
            <img
              className="outlined-help"
              alt=""
              src="/outlined--help@2x.png"
            />
            <div className="how-to-use1">How it works</div>
          </div>
        </div>
        <div className="iconssearch-parent">
          <img className="iconssearch" alt="" src="/iconssearch@2x.png" />
          <div className="dashboard">Search features, tutorials, etc.</div>
        </div>
        <div className="component-2-wrapper">
          <div className="component-2">
            <img className="icons-menu" alt="" src="/icons--menu@2x.png" />
            <img className="icons-menu" alt="" src="/icons--menu@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
