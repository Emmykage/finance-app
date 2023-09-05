import React from 'react'
import './modal.css'
import { useDispatch } from 'react-redux';
import { createPortfolio } from '../../redux/actions/portfolio';

const CheckoutModal = ({setToggleModal, toggleModal, portfolio, asset}) => {
    let display = '';
    const dispatch = useDispatch()
    if(toggleModal){ display = "show"}
    const handleSubmit = () => {
        if(portfolio.amount > asset.minimum_investment ){
            dispatch(createPortfolio(portfolio))
        }else{
            return
        }
      
    }
  return (
    <div className={`modal-container dark-text flex-justify-center ${display}`} >
        <div className="modal checkout">
            <div className='close-btn-div'><button onClick={()=>setToggleModal(!toggleModal)}>X</button></div>
            <table className='checkoutModal'>
                <thead>
                    <tr>
                        <th>Asset Title</th>
                        <th>Asset Type</th>
                        <th>Description</th>
                        <th>Term</th>
                        <th>Payment Schedule</th>
                        <th>Share In Excess(%)</th>
                        <th> Deposit (USD)</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>{asset.title}</td>
                        <td>{asset.asset_type}</td>
                        <td>{asset.description} </td>

                        <td>{asset.term}</td>
                        <td>{asset.payment_schedule}</td>
                        <td>{asset.share_in_excess}</td>
                        <td>{portfolio.amount < asset.minimum_investment ? <p className='red-text'>you cant proceed with this payment </p> : portfolio.amount} </td>
                    </tr>
                    
                </tbody>
            </table>
            <div>
            <a className='btn block' onClick={handleSubmit }>Make Payment</a>

            </div>
            
        
        </div>

    </div>
  )
}

export default CheckoutModal

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
