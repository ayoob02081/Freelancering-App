import { ThreeDots } from "react-loader-spinner";

function Lodaing({ width = "75", height = "40" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="rgb(var(--color-primary-900)) "
      wrapperStyle={{
        dsiplay: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}

export default Lodaing;
