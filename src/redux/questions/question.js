import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  faqs: [{
    title: 'What is the minimum investment requirement for a mutual fund',
    answer: 'The minimum investment requirement can vary by fund, but it is typically in the range of $1,000 to $3,000. Some funds offer lower minimums for investors who set up automatic contributions.',
  },
  {
    title: 'How are mutual funds managed',
    answer: "Mutual funds are managed by professional portfolio managers who make investment decisions on behalf of the fund's shareholders. They aim to achieve the fund's stated investment objectives.",

  },
  {
    title: 'Can I redeem my mutual fund shares at any time',
    answer: "In most cases, you can redeem mutual fund shares on any business day at the fund's net asset value (NAV), but it's important to check the specific redemption policies of the fund.",
  },
  {
    title: 'What is the difference between ETFs and mutual funds',
    answer: "ETFs are similar to mutual funds in that they pool investors' money to invest in a diversified portfolio. However, ETFs trade on exchanges like stocks, whereas mutual funds are priced once a day at the NAV.",
  },
  ],

};

const faqSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    getQuestions: (state) => ({
      ...state,

    }),
  },
});

export default faqSlice.reducer;
export const { getQuestions } = faqSlice.actions;
