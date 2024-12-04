import React from 'react';

const WorkUs = () => {
  return (
    <div className="bg-blue-100 py-12 px-6 my-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">How We Work?</h2>
        <p className="text-lg text-gray-700 mb-10">
          We help connect people with ideas and causes to those willing to contribute financially. 
          Here's how our crowdfunding platform operates to turn dreams into reality.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <div className="mb-4">
              <span className=" bg-blue-100 text-blue-600 text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Create a Campaign</h3>
            <p className="text-gray-600">
              Start by creating a campaign that showcases your project, idea, or cause. Share your story and set your funding goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <div className="mb-4">
              <span className=" bg-blue-100 text-blue-600 text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Spread the Word</h3>
            <p className="text-gray-600">
              Share your campaign with friends, family, and the community. Use social media and other platforms to reach potential supporters.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <div className="mb-4">
              <span className=" bg-blue-100 text-blue-600 text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Receive Contributions</h3>
            <p className="text-gray-600">
              Collect funds securely from supporters who believe in your cause. Every contribution brings you closer to your goal.
            </p>
          </div>
          {/* 4 ============= */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <div className="mb-4">
              <span className=" bg-blue-100 text-blue-600 text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center">4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Utilize Your Exiting Ideas</h3>
            <p className="text-gray-600">
              Utilize your ides to the people and make good Result by creating something Big! 
            </p>
          </div>
          {/* 5 ============= */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <div className="mb-4">
              <span className=" bg-blue-100 text-blue-600 text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center">5</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Collecting Fund For a project</h3>
            <p className="text-gray-600">
              As We know , we need fund for start a busniess so collecting a fund is a importnt issue ...you will send fund to our desire account
            </p>
          </div>
          {/* 4 ============= */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <div className="mb-4">
              <span className=" bg-blue-100 text-blue-600 text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center">6</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Helping People For start-Up</h3>
            <p className="text-gray-600">
              Guide people to start their new buisness and keep helping !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkUs;
