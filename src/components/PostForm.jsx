import {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({create}) {
  const [post, setPost] = useState({title: '', body: ''})

  function addNewPost(evt) {
    evt.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost);
    setPost({title: '', body: ''})
  }

  return (
    <form>
      <MyInput 
        type="text"
        placeholder="Название поста"
        value={post.title} 
        onChange={(evt) => setPost({...post, title: evt.target.value})}
      />
      <MyInput 
        type="text" 
        placeholder="Описание"
        value={post.body}
        onChange={(evt) => setPost({...post, body: evt.target.value})}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}

export default PostForm;