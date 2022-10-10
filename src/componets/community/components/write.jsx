import React, { useState, useEffect } from "react";
import styles from "./write.module.css";
import button from "@/common/button.module.css";
import float from "@/common/float.module.css";
import { useNavigate } from "react-router-dom";
import { fetchCategory, createCommunity } from "@api/community/community";

const CreateCommunity = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    category: "",
    content: "",
    title: "",
  });

  const [menu, setMenu] = useState([]);

  const { category, content, title } = data;
  const check = () => {
    if (data.title === "") alert("제목에 공란이 올 수 없습니다 :(");
    else if (data.content === "") alert("내용에 공란이 올 수 없습니다 :(");
    else create();
  };
  const create = () => {
    if (data.category === "") setData({ ...data, ["category"]: menu[0] });
    createCommunity(data)
      .then((res) => {
        alert("작성 완료되었습니다 :)");
        navigate("/community/board");
      })
      .catch((e) => alert(e.response.data));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchCategory().then((res) => setMenu(res.data));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.label}>제목</div>
          <input
            type="text"
            name="title"
            className={styles.inputForm}
            onChange={onChange}
            value={title}
          ></input>
        </div>
        <div className={styles.form}>
          <div className={styles.label}>카테고리</div>
          <select
            className={styles.inputForm}
            onChange={onChange}
            value={category}
            name="category"
          >
            {menu.map((data) => (
              <option value={data} key={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.form}>
          <div className={styles.label}></div>
          <textarea
            type="text"
            name="content"
            className={`${styles.inputForm} ${styles.textarea}`}
            onChange={onChange}
            value={content}
          ></textarea>
        </div>
        <button
          className={`${button.fullPrimaryBtn} ${float.floatRight} ${styles.right}`}
          onClick={check}
        >
          작성하기
        </button>
      </div>
    </>
  );
};

export default CreateCommunity;
