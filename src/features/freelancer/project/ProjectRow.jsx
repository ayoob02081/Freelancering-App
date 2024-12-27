import { useState } from "react";
import Table from "../../../UI/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateTeext";
import { MdAssignmentAdd } from "react-icons/Md";
import Modal from "../../../UI/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: { label: "باز", className: "badge--success" },
  CLOSE: { label: "بسته", className: "badge--danger" },
};

function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[project.status].className}`}>
          {projectStatus[project.status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(!open)}
          title={`درخواست انجام پروژه ${project.title}`}
        >
          <CreateProposal
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
