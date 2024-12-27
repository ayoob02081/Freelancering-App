import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="flex justify-center pt-10">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
