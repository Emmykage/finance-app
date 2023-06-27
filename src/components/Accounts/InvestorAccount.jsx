import React from 'react'

const InvestorAccount = () => {
  return (
    <div className='investor'>
     <table>
      <thead>
        <tr>
        <th>Investor</th>
        <th>Account type</th>
        <th>Identity</th>
        <th>Accreditation</th>
        <th></th>

        </tr>
        
      </thead>
      <tbody>
        <tr>
          <td>
            Ekelebe Stunner
          </td>
          <td>
            individual
          </td>
          <td>
            Unverified
          </td>
          <td>
          Unverified
          </td>
          <td>
            <a href=""> verify identity</a>
          </td>
          
        </tr>
      </tbody>
     </table>
     <a href='#'>Add new account</a>
      
    </div>
  )
}

export default InvestorAccount