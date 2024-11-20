import DashBoardLayout from "../../../layouts/DashboardLayout";
import Breadcrum from "../../../components/Breadcrum";
import AccountCard from "./account-view";

const AccountPage = () => {
  return (
    <div className="px-5">
      <Breadcrum />
      <div>
        <AccountCard/>
      </div>
    </div>
  );
};

const AccountView = () => {
  return (
    <DashBoardLayout>
      <AccountPage />
    </DashBoardLayout>
  );
};

export default AccountView;
