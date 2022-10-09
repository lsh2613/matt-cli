import React, { useEffect, useState } from "react";
import styles from "./board.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchaByCommunityId } from "@api/community/community";
const CommunityBoard = (props) => {
  const params = useParams();

  const id = params.communityId;
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchaByCommunityId(id).then((res) => {
      setData(res.data);
      setComments(res.data.commentList);
    });
  }, []);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contents}>
          <dd className={styles.category}>{data.category}</dd>
          <dd className={styles.title}>{data.title}</dd>
          <div className={styles.row2}>
            <dd className={styles.userName}>{data.userName}</dd>
            <dd className={styles.pastTime}>{data.pastTime}</dd>
          </div>
          <hr className={styles.hr} />
          <dd className={styles.content}>{data.content}</dd>
          <div className={styles.row}>
            <dd className={styles.numOfLikes}>👍🏻{data.numOfLikes}</dd>
            <dd className={styles.numOfComments}>💬{data.numOfComments}</dd>
          </div>
          <hr className={styles.hr} />
        </div>

        <div className={styles.comments}>
          <div className={styles.searchForm}>
            <input placeholder="댓글을 남겨보세요" />
            <button className={`${styles.fullPrimaryBtn} ${styles.searchBtn}`}>
              확인
            </button>
          </div>

          {comments.map((comment) => (
            <div key={comment.commentId} className={styles.comment}>
              <div className={styles.white}>
                <dd className={styles.nick}>{comment.writer}</dd>
                <dd className={styles.commentContent}>{comment.content}</dd>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommunityBoard;
