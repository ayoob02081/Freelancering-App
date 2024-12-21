import { useState } from "react";
import Modal from "../../UI/Modal";
import CreateProjectForm from "./CreateProjectForm";
import { HiOutlinePlus } from "react-icons/hi";

function ProjectsHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">پروژه‌های شما</h1>
      <Modal
        open={isOpen}
        title="اضافه کردن پروژه جدید"
        onClose={() => setIsOpen(false)}
      >
        <CreateProjectForm onClose={() => setIsOpen(false)} />
      </Modal>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn--primary flex items-center gap-2"
      >
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
}

export default ProjectsHeader;
