import React, { useState } from "react";

import MobDetailPage from "../MobDetailPage";
import AccountSideBar from "../../Private/AccountSideBar";
import PersistentDrawerLeft from "../../Private/MobileSideBar";

const MobileView = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <div>
      <PersistentDrawerLeft />
      <Header />
      <AccountSideBar
        openSidebar={toggleSidebar}
        sidebar={sidebar}
        closeSidebar={toggleSidebar}
      />
      <MobDetailPage />
    </div>
  );
};

export default MobileView;
