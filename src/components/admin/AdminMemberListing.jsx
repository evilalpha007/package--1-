import React from "react";
import Table from "react-bootstrap/Table";

export default function AdminMemberListing() {
  return <div className="">
  <div>
  <div className="member_listing d-flex justify-content-between">
    <h2>Member Listing</h2>
    <div>
      <span>Search by Login Name</span>
      <input type="text" className="ml-2" placeholder="Agency/member name" />
    </div>
    <div className="market button mx-5">
      <button className="bg-primary text-white p-1">Banking</button>
      <button className="bg-primary text-white p-1"> New Member</button>
    </div>
  </div>
  <span> Downline Listing</span>
  <div className="management_table">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr className="table_odd_color mt-3">
          <th colSpan={3}>Login Name</th>
          <th>Downline</th>
          <th>Status</th>
          <th>Details</th>
          <th>Net Exposure </th>
          <th>Take </th>
          <th>Give </th>
          <th>Credit Limit </th>
          <th>Balance</th>
          <th>PT (%) C/F/T/H/G </th>
          {/* <th></th> */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4}>a5demo</td>
          <td>---</td>
          <td>Active</td>
          <td>
            <span className="material-symbols-outlined">spoof</span>
          </td>
          <td>0:00</td>
          <td></td>
          <td></td>
          <td>0:00</td>
          <td>0:00</td>
          {/* <td></td> */}
        </tr>
        <tr className="table_odd_color">
          <td colSpan={4}>a5demo</td>
          <td>---</td>
          <td>Active</td>
          <td></td>
          <td>0:00</td>
          <td>
            <span className="material-symbols-outlined">spoof</span>
          </td>
          <td></td>
          <td>0:00</td>
          <td>0:00</td>
          {/* <td></td> */}
        </tr>
        <tr>
          <td colSpan={4}>a5demo</td>
          <td>---</td>
          <td>Active</td>
          <td></td>
          <td>0:00</td>
          <td>
            <span className="material-symbols-outlined">spoof</span>
          </td>
          <td></td>
          <td>0:00</td>
          <td>0:00</td>
          {/* <td></td> */}
        </tr>
      </tbody>
    </Table>
  </div>
</div>
  </div>;
}
