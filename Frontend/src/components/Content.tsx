import React from "react";
import { Button, Flex, Input } from "antd";
import { useState } from "react";

export default function ContentComp() {
  const [inpVal, setInpVal] = useState<string>("");
  const [allTodos, setAllTodos] = useState<string[]>([]);
  const inpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpVal(e.target.value);
    console.log(inpVal);
  };
  const handleClick = () => {
    if (inpVal.length > 0) {
      setAllTodos([inpVal, ...allTodos]);
      setInpVal("");
    }
  };
  return (
    <div className="">
      <Flex gap={10}>
        <Input
          value={inpVal}
          onChange={inpChange}
          style={{ width: "400px" }}
        ></Input>
        <Button
          onClick={handleClick}
          style={{ background: "#000", color: "#fff" }}
        >
          +
        </Button>
      </Flex>
      <div className="">
        {allTodos.length > 0 &&
          allTodos.map((todo, index) => {
            return <h2 key={index}>{todo}</h2>;
          })}
      </div>
    </div>
  );
}
