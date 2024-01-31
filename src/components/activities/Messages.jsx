import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/users';
import { getMessages } from '../../redux/actions/message';

const Messages = () => {
  const {messages} = useSelector(state => state.messages)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getMessages())
  },[])
  console.log(messages)
  return(
  <div className="activity-container">
    <h5>Message</h5>
    <div className="top">
      {/* <span>Important</span> */}
      <h2>Empty</h2>
     
      <table className='border-gray-light bg-white rounded-sm'>
        <thead>
          <tr className='text-sm text-gray-var border-b'>
            <td> Subject</td>
            <td> Message</td>
            <td> Date</td>
          </tr>
        </thead>
        <tbody>
          {messages.length < 1 ?  <p>No Messages available</p> :  messages.map((message) => (
             <tr>
              <td>{message.title}</td>
              <td>{message.body}</td>
          
             </tr>
     
          ))}
         
        </tbody>
      </table>

    </div>
    <div className="bottom">
      <span>Important</span>
      <p>Welcome to InvestEdge!</p>
      <p>Whether you're looking to generate income, grow your overrall portfolio value, or some combination of both, InvestEdge offers a variety of alternative investment opportunities</p>

      <div className="flex-justify-start act">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, labore expedita maiores recusandae nulla laudantium vero magni molestiae exercitationem quae suscipit voluptates? Veritatis ab eveniet nam animi in nihil, ipsum soluta? Ex nesciunt tempore ipsam autem. Consequuntur amet magnam facere?
        </p>
      </div>

    </div>

  </div>
);
}

export default Messages;
