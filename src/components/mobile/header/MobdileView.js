import React, { useState } from "react";

import Header from "../../Header/Header";
import PersistentDrawerLeft from "../../MobileSideBar";
import MobDetailPage from "../MobDetailPage";
import AccountSideBar from "../../Private/desktop/AccountSideBar";

const MobdileView = () => {
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

export default MobdileView;
