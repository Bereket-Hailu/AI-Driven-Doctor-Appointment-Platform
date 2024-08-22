import React from 'react'

const Appointmnet = ({appointment}) => {
  return (
    <table className="w-full text-left text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope='col' className="px-6 py-3">
              Name
            </th>
            <th scope='col' className="px-6 py-3">
             Gender
            </th>
            <th scope='col' className="px-6 py-3">
              Payment
            </th>
            <th scope='col' className="px-6 py-3">
              price
            </th>
            <th scope='col' className="px-6 py-3">
             Booked on
            </th>
          </tr>
        </thead>
        <tbody>{appointment?.map(item => <tr key={item.id}>
          <th scope='row' className='flex item-center px-6 py-4 text-gray-900 whitespace-nowrap'>
            <img src={item.user.photo} className="w-10 h-10 rounded-full" alt="" />
            <div className="pl-3">
              <div className="text-base font-semibold">{item.user.name}</div>
              <div className="text-normal text-gray-500">
                {item.user.email}
              </div>
            </div>
          </th>
          <td className="px-6 py-6">{item.user.gender}</td>
          <td className="px-6 py-4">
            {item.isPaid && (
              <div className="flex item-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 nr-2 "></div>
                Paid
              </div>
            )}
            {!item.isPaid && (
              <div className="flex item-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 "></div>
                Unpaid
              </div>
            )}
          </td>
          <td className="px-6 py-4">{item.ticketprice}</td>
           <td className="px-6 py-4">{formateDate(item.createdAt)}</td>
        </tr>)}
        </tbody>
    </table>
  )
}

export default Appointmnet;
