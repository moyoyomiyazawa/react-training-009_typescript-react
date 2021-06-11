import { VFC } from 'react';
// 別ファイルに切り出した型エイリアスを読み込み
import { TodoType } from './types/todo';

export const Todo: VFC<Omit<TodoType, 'id'>> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? '[完]' : '[未]';
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
