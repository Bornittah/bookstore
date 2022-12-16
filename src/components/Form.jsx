import uniqid from 'uniqid';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addBook, fetchBooks } from '../redux/books/books';
import Button from './shared/Button';

const Form = () => {
  // calling useDispatch to the component
  const dispatch = useDispatch();

  const [state, setState] = useState({
    item_id: uniqid(),
    title: '',
    author: '',
    category: '',
  });

  const [style, setStyle] = useState('error_msg');

  const changeStyle = () => {
    setStyle('show_error_msg');
  };

  const handleChanges = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="form-section">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="flex form">
        <input type="text" value={state.title} name="title" onChange={handleChanges} placeholder="Book title" />
        <span className={style}>Please enter title</span>
        <input type="text" value={state.author} name="author" onChange={handleChanges} placeholder="Book author" />
        <span className={style}>Please enter author</span>
        <select required value={state.category} name="category" onChange={handleChanges}>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
        </select>
        <Button
          value="Add book"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setState({
              item_id: uniqid(),
              title: '',
              author: '',
              category: '',
            });
            if (state.title !== '' && state.author !== '') {
              dispatch(addBook(state));
              dispatch(fetchBooks());
            } else {
              changeStyle();
            }
          }}
        />
      </form>
    </div>
  );
};

export default Form;
