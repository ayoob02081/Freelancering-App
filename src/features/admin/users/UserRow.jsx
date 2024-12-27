import Table from "../../../UI/Table";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import Modal from "../../../UI/Modal";
import { useState } from "react";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;

  return (
    <Table.Row key={user._id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{toPersianNumbers(user.phoneNumber)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          title="تغییر وضعیت کاربر"
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    
    </Table.Row>
  );
}

export default UserRow;
