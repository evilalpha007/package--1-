import React from "react";
import Table from "react-bootstrap/Table";

export default function AdminTransfer() {
  return (
    <div className="admintransfer">
      <div className="transfer mb-2 d-flex align-items-center justify-content-between">
        <h2>Transfer</h2>
        <button className="fw-semibold">Undo Transfer</button>
      </div>
      <hr />
      <span className="mb-2">Available to take: 0.00</span>
      <Table striped bordered hover variant="dark " className="mt-2 ">
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
  );
}
