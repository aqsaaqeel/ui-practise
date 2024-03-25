import "./Dashboard.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { PaginationComp } from "../components/PaginationComp/PaginationCOmp";
import { DataTable } from "../components/data-table/DataTable";
import { DataTableHeader } from "../components/data-table-header/DataTableHeader";
const Dashboard = () => {
  const dataEntry = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ]; //in a real application, we will get this data from api
  return (
    <div className="payments-cashfree-dashboard">
      <Navbar />
      <div className="frame-group">
        <div className="frame-container">
          <div className="frame-div">
            <div className="overview-parent">
              <div className="overview">Overview</div>
              <div className="group-wrapper">
                <div className="rectangle-parent">
                  <div className="group-child" />
                  <div className="last-month">Last Month</div>
                  <img className="iconsarrow" alt="" src="/iconsarrow@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent1">
            <div className="frame-wrapper">
              <div className="frame-wrapper1">
                <div className="frame-parent2">
                  <div className="online-orders-parent">
                    <div className="online-orders">Online orders</div>
                    <img className="outlined-settings" alt="" />
                  </div>
                  <div className="div">232</div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-wrapper1">
                <div className="frame-parent2">
                  <div className="online-orders-parent">
                    <div className="online-orders">Amount received</div>
                    <img className="outlined-settings" alt="" />
                  </div>
                  <div className="div">₹23,91,312.19</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="transactions-this-month-parent">
          <div className="overview">Transactions | This Month</div>
          <div className="template-3">
            <DataTableHeader />
            {dataEntry.map((item) => (
              <DataTable key={item} />
            ))}
          </div>
          <PaginationComp />
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default Dashboard;
