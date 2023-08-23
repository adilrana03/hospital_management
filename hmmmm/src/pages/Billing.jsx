import React, { useState } from 'react';
import Card from '../components/Card';
import BillDetails from '../components/BillDetails'; // Import the BillDetails component here
import { BsBell } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'

const Billing = () => {
      const billingData = [
            {
                  avatar: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
                  name: "Adil Rana",
                  age: 25,
                  gender: "Male",
                  billNumber: 12345,
                  // Add billDetails object here for each patient
                  billDetails: {
                        name: "X-ray",
                        age: 25,
                        gender: "Male",
                        bill_no: 123459796,
                        rnum: 12345,
                        price: 5000,
                        quantity: 100,
                        amount: 5000,
                  },
            },
            {
                  avatar: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
                  name: "Saurav Singh",
                  age: 30,
                  gender: "Male",
                  billNumber: 12345,
                  // Add billDetails object here for each patient
                  billDetails: {
                        name: "Saurav Singh",
                        age: 30,
                        gender: "Male",
                        bill_no: 12345,
                        rnum: 12345,
                        price: 5000,
                        quantity: 100,
                        amount: 5000,
                  },
            }, {
                  avatar: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
                  name: "abc",
                  age: 15,
                  gender: "Male",
                  billNumber: 12345,
                  price: 5000,
                  quantity: 100,
                  amount: 5000,
                  bill_no: 12345,
                  rnum: 12345,
                  billDetails: {
                        name: "abc",
                        age: 30,
                        gender: "Male",
                        bill_no: 12345,
                        rnum: 12345,
                        price: 5000,
                        quantity: 100,
                        amount: 5000,
                  }
                  // Add billDetails object here for each patient
            },
            {
                  avatar: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
                  name: "Saurav Singh",
                  age: 30,
                  gender: "Male",
                  billNumber: 12345,
                  // Add billDetails object here for each patient
                  billDetails: {
                        name: "Saurav Singh",
                        age: 30,
                        gender: "Male",
                        bill_no: 12345,
                        rnum: 12345,
                        price: 5000,
                        quantity: 100,
                        amount: 5000,
                  },
            }, {
                  avatar: "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png",
                  name: "Saurav Singh",
                  age: 30,
                  gender: "Male",
                  billNumber: 12345,
                  // Add billDetails object here for each patient
                  billDetails: {
                        name: "Saurav Singh",
                        age: 30,
                        gender: "Male",
                        bill_no: 12345,
                        rnum: 12345,
                        price: 5000,
                        quantity: 100,
                        amount: 5000,
                  },
            }
      ];
      const [expandedIndex, setExpandedIndex] = useState(-1);


      return (
            <div className='text-left bg-blue-50 h-[773px] w-full p-8 -ml-4 relative z-10 rounded-2xl'>
                  <div className='flex text-sm font-light justify-between mb-4 '>
                        <input type="text" placeholder={`🔍   Search Pateint`} className='border p-2 pr-20 w-[60%] rounded-3xl pl-10' />
                        <button className='text-white bg-blue-900 p-2 px-4 rounded-3xl'>Make An Appointment</button>
                        <button className='text-white bg-blue-900 p-2 px-4 rounded-3xl'>Add Patient</button>
                        <button className='text-white bg-blue-900 p-2 px-4 rounded-3xl'><BsBell /></button>
                  </div>

                  <div className='flex justify-between mb-3 ml-4 '>
                        <h1 className='font-bold text-2xl'>Billing Overview</h1>
                        <h4 className='bg-blue-200  mx-5 px-5 text-xs p-2'>Fabruary 2021</h4>
                  </div>

                  <div className=' bg-blue-50 h-[600px] z-100 '>
                        <div  >
                              {billingData.map((e, i) => (
                                    <Card
                                          key={i}
                                          index={i} // Pass the index of the card
                                          expandedIndex={expandedIndex}
                                          setExpandedIndex={setExpandedIndex}
                                          {...e}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default Billing;
