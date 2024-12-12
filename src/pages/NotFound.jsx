import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="sm:max-w-sm flex justify-center pt-10 ">
      <div>
        <h1 className="text-xl font-bold text-secondary-700">
          صفحه ای که دنبالش بودید، پیدا نشد 😔
        </h1>
        <button onClick={moveBack} className="flex items-center gap-4">
          <HiArrowRight className="w-6 h-6 text-primary-900" />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
