import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2);
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-3 gap-x-8 ">
      <Stat
        color="primary"
        title="پروژه‌ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProjects}
      />
      <Stat
        color="green"
        title="پروژه‌های واگذار شده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={numOfAcceptedProjects}
      />
      <Stat
        color="blue"
        title="درخواست‌ها"
        icon={<HiCollection className="w-20 h-20" />}
        value={numOfProposals}
      />
    </div>
  );
}

export default Stats;
