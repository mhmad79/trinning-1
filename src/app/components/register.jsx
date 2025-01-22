'use client'
import { useState } from "react";
import ArrowUpRight from "../icon/arrow-up-right";
import BarsArrowDown from "../icon/bars-arrow-down";
import Delete from "../icon/delete";
import DocumentArrowDown from "../icon/document-arrow-down";

export default function Register() {
    const [shoDetails, setShowDetails] = useState(false)

    const handleDetailsClick = () => {
        setShowDetails(!shoDetails);
    }
    return (
        <div className=" ">
            <div className=" flex gap-5 w-full ">
                <button className="px-12 py-2">بحث</button>
                <input type="text" placeholder="from" />
                <input type="text" placeholder="To" />
            </div>
                {/* icon */}
            <div className=" flex gap-3 justify-end my-5">
                <ArrowUpRight  />
                <BarsArrowDown />
                <DocumentArrowDown />
                <Delete />
            </div>

            <div >
                <table className=" w-full m-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className=" p-2 border">النزع</th>
                            <th className=" p-2 border">الحالة</th>
                            <th className=" p-2 border">مزامنة الية</th>
                            <th className=" p-2 border">وقت البدء</th>
                            <th className=" p-2 border">وقت النتهاء</th>
                            <th className=" p-2 border">اجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className=" p-2 border">نوع 1</td>
                            <td className=" p-2 border">ناجح</td>
                            <td className=" p-2 border">نعم</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td className=" p-2 border">12:00 PM</td>
                            <td>
                                <button
                                    className=" w-full  py-2"
                                    onClick={handleDetailsClick}
                                >
                                   التفاصيل  
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {shoDetails && (
                <div className=" mt-6 overflow-x-auto">
                 <table className=" w-full text-sm text-center border-gray-300">
                     <thead className="bg-gray-100">
                         <tr>
                             <th className=" p-2 border">الرمز</th>
                             <th className=" p-2 border">الوقت</th>
                             <th className=" p-2 border">نوع الخطأ</th>
                             <th className=" p-2 border">رسالة الخطأ</th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">12:31 PM</td>
                             <td className=" p-2 border">حزف</td>
                             <td className=" p-2 border">خطأ في المزامنة</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">12:31 PM</td>
                             <td className=" p-2 border">حزف</td>
                             <td className=" p-2 border">خطأ في المزامنة</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">12:31 PM</td>
                             <td className=" p-2 border">حزف</td>
                             <td className=" p-2 border">خطأ في المزامنة</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">12:31 PM</td>
                             <td className=" p-2 border">حزف</td>
                             <td className=" p-2 border">خطأ في المزامنة</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">12:31 PM</td>
                             <td className=" p-2 border">حزف</td>
                             <td className=" p-2 border">خطأ في المزامنة</td>
                         </tr>
                         <tr>
                             <td className=" p-2 border">10337009</td>
                             <td className=" p-2 border">12:31 PM</td>
                             <td className=" p-2 border">حزف</td>
                             <td className=" p-2 border">خطأ في المزامنة</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
            )}
        </div>
    )
}