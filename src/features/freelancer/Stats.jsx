import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import Stat from "../../UI/Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((curr, acc) => curr + acc.price, 0);

  return (
    <div className="grid grid-cols-3 gap-x-8 ">
      <Stat
        color="primary"
        title="درخواست‌ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProposals}
      />
      <Stat
        color="blue"
        title="درخواست‌های پذیرفته شده"
        icon={<HiCollection className="w-20 h-20" />}
        value={acceptedProposals.length}
      />
      <Stat
        color="green"
        title="کیف پول"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={toPersianNumbersWithComma(balance)}
      />
    </div>
  );
}

export default Stats;
