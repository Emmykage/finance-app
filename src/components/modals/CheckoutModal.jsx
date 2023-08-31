import React from 'react'
import './modal.css'

const CheckoutModal = ({setToggleModal, toggleModal}) => {
    let display = '';
    if(toggleModal){ display = "show"}
  return (
    <div className={`checkout modal-container dark-text flex-justify-center ${display}`} >
        <div className="modal">
            <div className='close-btn-div'><button onClick={()=>setToggleModal(!toggleModal)}>X</button></div>
            <table>
                <thead>
                    <tr>
                        <th>column 1</th>
                        <th>column 2</th>
                        <th>column 3</th>
                        <th>column 4</th>
                        <th>column 5</th>
                        <th>column 6</th>
                        <th>column 7</th>
                        <th>column 8</th>
                        <th>column 9</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>Asset Name:</td>
                        <td></td>
                    </tr>
                    
                     <tr>
                        <td>Asset Min: </td>
                        <td></td>
                    </tr> 
                </tbody>
            </table>
        CHeckout
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
