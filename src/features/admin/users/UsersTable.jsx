import Empty from "../../../UI/Empty";
import Loading from "../../../UI/Loading";
import Table from "../../../UI/Table";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

function UsersTable() {
  const { isLoading, users } = useUsers();

  if (isLoading) return <Loading />;

  if (!users.length) return <Empty resourseName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>نقش</th>
        <th>شماره موبایل</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}

export default UsersTable;
