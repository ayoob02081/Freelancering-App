import { useForm } from "react-hook-form";
import TextField from "../../UI/TextField";
import RHFSelect from "../../UI/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../UI/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCraeateProject";
import Loading from "../../UI/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = [] }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    description,
    budget,
    deadline: editDeadline,
    category,
    tags: editTags,
  } = projectToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [date, setDate] = useState(new Date(editDeadline || ""));
  const [tags, setTags] = useState(editTags || []);
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: { value: 10, message: "طول نامعتبر است" },
        }}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: { value: 10, message: "طول نامعتبر است" },
        }}
      />
      <TextField
        label="بودجه"
        name="budget"
        register={register}
        required
        errors={errors}
        validationSchema={{
          required: "بودجه ضروری است",
          minLength: { value: 5, message: "طول نامعتبر است" },
        }}
        type="number"
      />
      <RHFSelect
        label="دسته‌بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name={tags} />
      </div>
      <DatePickerField label="ددلاین" date={date} setDate={setDate} />
      {isCreating || isEditing ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}

export default CreateProjectForm;
