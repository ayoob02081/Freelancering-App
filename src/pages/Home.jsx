import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="h-screen bg-secondary-100 flex justify-center items-center">
        <h1 className="font-bold text-4xl text-secondary-800">صفحه اصلی</h1>
      </div>
    </div>
  );
}

export default Home;
