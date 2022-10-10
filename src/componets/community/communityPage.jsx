import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./community.module.css";
import CommunityMenu from "./components/menu";
import CommunityList from "./components/list";
import CreateCommunity from "./components/write";
import CommunityBoard from "./components/board";

const CommunityPage = (props) => {
  return (
    <div className={styles.container}>
      <CommunityMenu />
      <Routes>
        <Route exact path="/board" element={<CommunityList />} />
        <Route exact path="/board/:communityId" element={<CommunityBoard />} />
        <Route exact path="/create" element={<CreateCommunity />} />
      </Routes>
    </div>
  );
};

export default CommunityPage;
