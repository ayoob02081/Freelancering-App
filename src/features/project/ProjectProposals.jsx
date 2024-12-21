import Empty from "../../UI/Empty";
import Table from "../../UI/Table";
import ProposalRow from "./ProposalRow";

function ProjectProposals({ proposals }) {
  console.log(proposals);

  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}

export default ProjectProposals;
