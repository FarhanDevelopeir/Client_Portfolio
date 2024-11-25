import React from 'react'

const DetailModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative w-full h-[80%] md:h-[500px] overflow-y-scroll max-w-5xl mx-4 my-8 bg-gray-900 rounded-2xl shadow-2xl custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-10 p-2 bg-gray-800 rounded-full text-gray-200 hover:text-white hover:bg-gray-700 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Wrapper */}
        <div className="flex flex-col">
          {/* Image Section */}
          <div className="w-full border-b border-gray-700   z-10">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[300px] object-cover rounded-t-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 bg-gray-900">
            {/* Title */}
            <h2 className="text-4xl font-bold text-white mb-6 border-b border-gray-700 pb-4">
              {data.title}
            </h2>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Description</h3>
              <p className="text-gray-300 h-[100px]  leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>

            {/* Technologies */}
           

            {/* Links Section */}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailModal
