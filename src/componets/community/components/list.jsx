import React, { useEffect, useState } from "react";
import styles from "./list.module.css";
import { fetchaAllCommunity } from "@api/community/community";
const CommunityList = (props) => {
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    fetchaAllCommunity().then((res) => setCommunity(res.data));
  }, []);
  return (
    <>
      <section className={styles.communitySection}>
        <div className={styles.communityContainer}>
          {community.map((data, index) => (
            <li key={index} className={styles.item}>
              <dd className={styles.category}>{data.category}</dd>
              <dd className={styles.title}>{data.title}</dd>
              <dd className={styles.content}>{data.content}</dd>
              <div className={styles.row}>
                <dd className={styles.numOfLikes}>👍🏻{data.numOfLikes}</dd>
                <dd className={styles.numOfComments}>💬{data.numOfComments}</dd>
                <dd className={styles.pastTime}>{data.pastTime}</dd>
              </div>
              <hr className={styles.hr} />
            </li>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommunityList;
