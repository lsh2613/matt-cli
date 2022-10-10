import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./wishlist.module.css";
import button from "@/common/button.module.css";
import { fetchByUser, deleteCommunity } from "@api/community/community";

const Community = (props) => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [board, setBoard] = useState([]);
  const [classId, setClassId] = useState(0);

  useEffect(() => {
    fetchByUser().then((res) => setBoard(res.data));
  }, [props.visible]);

  const toBoard = (id) => {
    navigate(`/community/board/${id}`);
  };

  const delBoard = (id) => {
    alert("정말 삭제하시겠습니까?");
    deleteCommunity(id).then(() =>
      fetchByUser().then((res) => setBoard(res.data))
    );
  };

  const goUpdate = (id) => {
    navigate(`/community/board/update/${id}`);
  };

  return (
    <>
      <>
        <span className={styles.title}>작성한 게시글</span>
        <div className={styles.classList}>
          {board.map((item) => (
            <div
              className={styles.class}
              key={item.communityId}
              onClick={() => toBoard(item.communityId)}
            >
              <article className={styles.boardTitle}>{item.title}</article>
              <article className={styles.boardCategory}>
                {item.category}
              </article>

              <aside className={styles.btnGroup}>
                <button
                  className={`${button.fullGrayBtn}  ${styles.btn}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    delBoard(item.communityId);
                  }}
                >
                  삭제
                </button>
                <button
                  className={`${button.fullBtn} ${button.blue} ${styles.btn}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goUpdate(item.communityId);
                  }}
                >
                  수정
                </button>
              </aside>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Community;
