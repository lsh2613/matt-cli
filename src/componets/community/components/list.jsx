import React, { useEffect, useState } from "react";
import styles from "./list.module.css";
import { fetchaAllCommunity, fetchByCategory } from "@api/community/community";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CommunityList = (props) => {
  const navigate = useNavigate();
  const [community, setCommunity] = useState([]);

  const menu = useSelector((state) => state.community.menu);

  useEffect(() => {
    if (menu === "전체")
      fetchaAllCommunity().then((res) => setCommunity(res.data));
    else fetchByCategory(menu).then((res) => setCommunity(res.data));
  }, [menu]);
  return (
    <>
      <section className={styles.communitySection}>
        <div className={styles.communityContainer}>
          {community.length > 0 ? (
            community.map((data) => (
              <li
                key={data.communityId}
                className={styles.item}
                onClick={() => navigate(`/community/board/${data.communityId}`)}
              >
                <dd className={styles.category}>{data.category}</dd>
                <dd className={styles.title}>{data.title}</dd>
                <dd className={styles.content}>{data.content}</dd>
                <div className={styles.row}>
                  <dd className={styles.numOfLikes}>👍🏻{data.numOfLikes}</dd>
                  <dd className={styles.numOfComments}>
                    💬{data.numOfComments}
                  </dd>
                  <dd className={styles.pastTime}>{data.pastTime}</dd>
                </div>
                <hr className={styles.hr} />
              </li>
            ))
          ) : (
            <div className={styles.none}>게시글이 없습니다 ❗</div>
          )}
        </div>
      </section>
    </>
  );
};

export default CommunityList;
