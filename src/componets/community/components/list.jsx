import React, { useEffect, useState } from "react";
import styles from "./list.module.css";
import { fetchaAllCommunity } from "@api/community/community";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onChangeId } from "@redux/reducers/community";
const CommunityList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [community, setCommunity] = useState([]);

  const onChange = (id) => {
    dispatch(onChangeId(id));
    navigate(`/community/board/${id}`);
  };
  useEffect(() => {
    fetchaAllCommunity().then((res) => setCommunity(res.data));
  }, []);
  return (
    <>
      <section className={styles.communitySection}>
        <div className={styles.communityContainer}>
          {community.map((data) => (
            <li
              key={data.communityId}
              className={styles.item}
              onClick={() => onChange(data.communityId)}
            >
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
