import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// React 18ではFC型が暗黙的なchildrenを含まなくなるので、17までは暫定的にVFCを使う
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
