import React, { useEffect, useState } from 'react'
import bg_img from "../assets/images/bgimg.png"
import { useDispatch, useSelector } from 'react-redux';
import { certificates } from './Admin_Components/features/Certificates_Features/Certificate_Slice';
import axios from 'axios';
import { BASE_URL } from '../constant';
import DetailModal from './DetailModal';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allCertificates = useSelector((state)=>state.certificate_Slice?.Certificates)
  const dispatch = useDispatch()
  console.log(allCertificates);
  

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/certificates`); // Update API endpoint
        console.log(response.data); // Check if data is being fetched correctly
        dispatch(certificates(response.data)); // Dispatch the fetched data to the Redux store
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, [dispatch]);
  return (
    <div
    style={{
      backgroundImage: `url(${bg_img})`,
    }}
    className={`heroSection pt-32 md:pt-0     md:px-10 lg:px-36  text-white bg-gray-900  ${allCertificates.length >= 1 ? "h-full md:h-screen":"h-screen"}`}
  >
    <div className="w-[80%] m-auto md:w-full md:pt-36">
      <div className=" mb-10 rounded-lg px-4 py-2 w-full">
        <h1 className=" text-3xl  md:text-5xl mb-2 drop-shadow-2xl font-semibold ">
          Certificates
        </h1>
        <h4 className="text-gray-400 font-semibold ">Current Certificates</h4>
      </div>
      <div >
        {allCertificates.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {allCertificates.map((certificate, index) => (
              <div
                key={index}
                className="max-w-sm border rounded-lg shadow-lg border-white shadow-blue-900 bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900"
              >
                <div>
                  <img
                    className="rounded-t-lg h-[250px] w-full object-cover"
                    src={certificate.image}
                    alt={certificate.title}
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-semibold text-white">
                    {certificate.title}
                  </h5>

                  <button
                    onClick={() => {
                      setSelectedCertificate(certificate);
                      setIsModalOpen(true);
                    }}
                    className="flex items-center w-28 cursor-pointer text-yellow-400 hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  >
                    View 
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedCertificate}
      />
    </div>
  </div>
  )
}

export default Certificates