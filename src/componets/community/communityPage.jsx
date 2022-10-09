import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./community.module.css";
import CommunityMenu from "./components/menu";
import CommunityList from "./components/list";

const CommunityPage = (props) => {
  return (
    <div className={styles.container}>
      <CommunityMenu />
      <CommunityList />
    </div>
  );
};

export default CommunityPage;
