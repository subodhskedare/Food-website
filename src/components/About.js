import { LOGO_URL } from "../utils/constant";

import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <br /> 
            <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
              The world of
            </span> <br />
            <span className="text-yellow-300">Tasty & Fresh Food</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
            We're passionate about bringing you the finest culinary experiences from around the world, 
            delivered fresh to your doorstep with love and care.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a simple mission: to make great food accessible to everyone, everywhere. 
                We believe that every meal should be an experience worth savoring, whether you're 
                dining alone or sharing with loved ones.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-600">Partner Restaurants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                  <div className="text-gray-600">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>

            {/* User Components */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
                <div className="space-y-4">
                  <User name={"Subodh"} />
                  <UserClass name={"Subodh-Class"} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src={LOGO_URL} 
                alt="Food Image" 
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Fresh & Delicious
            </div>
            <div className="absolute -bottom-4 -left-4 bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Fast Delivery
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in 30 minutes or less, guaranteed fresh and hot.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assured</h3>
              <p className="text-gray-600">Every dish is prepared with the finest ingredients and highest quality standards.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Made with Love</h3>
              <p className="text-gray-600">Every meal is crafted with passion and care by our talented chefs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;