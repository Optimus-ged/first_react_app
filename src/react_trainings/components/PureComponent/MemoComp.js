import React from "react";

function MemoComp({ name }) {
  console.log("************************* MEMO COMPONENT ***************");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
