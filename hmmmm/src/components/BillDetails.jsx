import React from 'react';

const BillDetails = ({ billDetails }) => {
      const { name, age, gender, bill_no, rnum, price, quantity, amount } = billDetails;

      return (
            <>
                  <div className="bg-white  rounded-2xl shadow-md h-[600px] mt-36  w-[766px] p-8 -ml-8">
                        <div className="bg-white  rounded-2xl border border-blue-900 ">
                              <div className="mb-1 h-[400px]  ">
                                    <div className='flex justify-between mb-5 p-6 pb-1'>
                                          <h2 className="text-lg font-semibold mb-2 px-2">Billing Details</h2>
                                          <button className='text-white bg-blue-900 rounded-3xl px-4 font-light' >Print Bill</button>
                                    </div>
                                    <div className="mb-2 flex m-auto bg-gray-100 p-4 w-full">
                                          <div className='mr-6'>
                                                <span className="text-sm text-gray-400 font-light">Patient Name</span>
                                                <p className='font-light text-sm'>{name}</p>
                                          </div>
                                          <div className="mr-6">
                                                <span className="text-sm  text-gray-400 font-light">Age/Gender</span>
                                                <p className='font-light text-sm'>{age}/{gender}</p>
                                          </div>
                                          <div className="mr-6">
                                                <span className="text-sm  text-gray-400 font-light">Bill No</span>
                                                <p className='font-light text-sm'>{bill_no}</p>
                                          </div>
                                          <div className="mr-6">
                                                <span className="text-sm  text-gray-400 font-light">Date/Time</span>
                                                <p className='font-light text-sm'>02/02/2023, 06:23 PM</p>
                                          </div>
                                          <div className="">
                                                <span className="text-sm  text-gray-400 font-light">Receipt No</span>
                                                <p className='font-light text-sm'>{rnum}</p>
                                          </div>
                                    </div>
                                    <table className="w-full text-left">
                                          <thead>
                                                <tr>
                                                      <th className="px-2 py-1 text-sm">Sr.no</th>
                                                      <th className="px-2 py-1 text-sm">Service Name</th>
                                                      <th className="px-2 py-1 text-sm">Price</th>
                                                      <th className="px-2 py-1 text-sm">Quantity</th>
                                                      <th className="px-2 py-1 text-sm">Amount</th>
                                                </tr>
                                          </thead>

                                          <tbody>

                                                {
                                                      <tr>
                                                            <td className=" px-2 py-1">1</td>
                                                            <td className=" px-2 py-1">{name}</td>
                                                            <td className=" px-2 py-1">{price}</td>
                                                            <td className=" px-2 py-1">{quantity}</td>
                                                            <td className=" px-2 py-1">{amount}</td>
                                                      </tr>
                                                }
                                          </tbody>
                                    </table>

                              </div>
                              <div className='bg-gray-100 p-4 rounded-b-2xl'>
                                    <div className='flex justify-between ' >
                                          <p>Mobile</p>
                                          <p>9560130664</p>
                                    </div>
                                    <div className='flex justify-between'>
                                          <p>Tax</p>
                                          <p>200</p>
                                    </div>
                                    <div className='flex justify-between'>
                                          <p>Discount</p>
                                          <p>50</p>
                                    </div>
                              <hr class="h-2px border border-gray-300 "/>
                                    <div className='flex justify-between'>
                                          <p>Total</p>
                                          <p>9327164</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default BillDetails;
