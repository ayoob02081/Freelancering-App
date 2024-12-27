import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";

import Stat from "../../UI/Stat";

function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-3 gap-x-8 ">
      <Stat
        color="green"
        title="کاربران"
        icon={<HiUser className="w-20 h-20" />}
        value={users}
      />
      <Stat
        color="primary"
        title="پروژه‌ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={projects}
      />
      <Stat
        color="blue"
        title="درخواست‌ها"
        icon={<HiCollection className="w-20 h-20" />}
        value={proposals}
      />
    </div>
  );
}

export default Stats;
