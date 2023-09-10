import { createSlice } from "@reduxjs/toolkit";

const initialState ={
   
    faqs: [{
        title: "How does EdgeInvest get paid",
        answer: "We get paid on a monthly basic, weekly basis and yearly basis Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde provident maiores necessitatibus quos, nemo repellendus accusantium distinctio tenetur tempora praesentium. Tempore possimus sunt dolore, ab asperiores iusto dignissimos quisquam quam, deleniti dolorem omnis est eum vel qui non maxime!"
    },
    {
        title: "How does EdgeInvest get paid",
        answer: "We get paid on a monthly basic, weekly basis and yearly basis Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde provident maiores necessitatibus quos, nemo repellendus accusantium distinctio tenetur tempora praesentium. Tempore possimus sunt dolore, ab asperiores iusto dignissimos quisquam quam, deleniti dolorem omnis est eum vel qui non maxime!"
    }],
  
}

const faqSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {        
        getQuestions: (state) => {
            return{
                ...state,
                
            }

        }
    }
})

export default faqSlice.reducer
export const {getQuestions} = faqSlice.actions
