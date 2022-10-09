import React, { useEffect, useState } from "react";
import { onChangeMenu } from "@redux/reducers/community";
import { useSelector, useDispatch } from "react-redux";
import styles from "./menu.module.css";
import { fetchCategory } from "@api/community/community";
const CommunityMenu = (props) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.community.menu);
  const [category, setCategory] = useState([]);
  const onChange = (e) => {
    const value = e.target.value;
    dispatch(onChangeMenu(value));
  };

  useEffect(() => {
    fetchCategory().then((res) => setCategory(res.data));
  }, []);

  return (
    <section className={styles.menuSection}>
      <div className={styles.menuContainer}>
        <hgroup className={styles.radioGroup}>
          <input
            type="radio"
            name="menu"
            id="전체"
            checked={menu === "전체"}
            className={styles.radioForm}
            value="전체"
            onChange={onChange}
          ></input>
          <label htmlFor="전체" className={styles.radioForm}>
            전체
          </label>
          {category.map((item, index) => (
            <>
              <input
                key={item.toString()}
                type="radio"
                id={item}
                name="menu"
                value={item}
                checked={menu === item}
                className={styles.radioForm}
                onChange={onChange}
              ></input>
              <label key={index} htmlFor={item} className={styles.radioForm}>
                {item}
              </label>
            </>
          ))}
        </hgroup>
      </div>
    </section>
  );
};

export default CommunityMenu;
