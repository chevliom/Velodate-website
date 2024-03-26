import { Outlet } from "react-router-dom";

const AppPolicyLayout = () => {
  return (
    <>
      <section className="flex min-h-screen flex-1 bg-black">
        <Outlet />
      </section>
    </>
  );
};

export default AppPolicyLayout;
