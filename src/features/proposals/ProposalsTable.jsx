import useProposals from "../../proposals/useProposals";
import Empty from "../../UI/Empty";
import Loading from "../../UI/Loading";
import Table from "../../UI/Table";
import ProposalRow from "./ProposalRow";

function ProposalsTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  if (!proposals.length) return <Empty resourseName="پروپوزال" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}

export default ProposalsTable;
