

const Contuct = () => {
    return (
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Sharing Your Ideas to the World...</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Share Ideas Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">Let's Share Your Ideas!</h1>
              <p className="text-gray-600 mb-6">
                Share your knowledge and serve both yourself and your country. Building a better future benefits not only you but also the nation as a whole.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Share Ideas
              </a>
            </div>
  
            {/* Collaborate Section */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">Collaborate With Us?</h1>
              <p className="text-gray-600 mb-6">
                Join us to share your exciting ideas for helping people grow their businesses. This is your opportunity to showcase how your ideas can make a positive impact.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contuct;
  