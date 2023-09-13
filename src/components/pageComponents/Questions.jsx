import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { getQuestions } from '../../redux/questions/question';

const Questions = ({ faq }) => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  return (
    <>

      <li className="flex-justify-space row">
        <span>{faq.title}</span>
        <span className={!toggle && 'rotate'} onClick={() => setToggle(!toggle)}><ArrowForwardIosOutlined /></span>
      </li>
      <div className={toggle && 'faq hide-display'}>
        <p>{faq.answer}</p>

      </div>

    </>
  );
};

export default Questions;
