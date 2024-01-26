import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to MPSafaric
        </h1>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-4">
              <strong className="text-lg block mb-2">
                1. Create Your Account
              </strong>
              <p className="text-gray-700">
                Embark on your journey by creating a personalized account on
                MPSafaric. It takes just a few moments to sign up and unlock a
                world of possibilities.
              </p>
              <Link to="/register" className="text-blue-500 mt-2 block">
                Sign Up Now
              </Link>
            </div>
            <div className="mb-4">
              <strong className="text-lg block mb-2">
                2. Explore My-Hotels Tab
              </strong>
              <p className="text-gray-700">
                After registration, dive into the heart of MPSafaric by
                navigating to the "My-Hotels" tab. This is your command center
                for listing and managing your hotels.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-lg block mb-2">
                3. List Your Hotels
              </strong>
              <p className="text-gray-700">
                Ready to showcase your exquisite properties to the world? The
                process is as simple as a breeze. Navigate to the "My-Hotels"
                tab, click on "List a New Hotel," and follow our intuitive
                listing process.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-lg block mb-2">
                4. Await Booking Requests
              </strong>
              <p className="text-gray-700">
                Sit back and relax as potential customers discover your
                offerings. Our user-friendly platform ensures that your hotels
                get the attention they deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Why MPSafaric Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Why MPSafaric?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-4">
              <strong className="text-lg block mb-2">User-Friendly</strong>
              <p className="text-gray-700">
                We've designed MPSafaric with simplicity in mind. Whether you're
                a tech-savvy hotelier or a first-time traveler, our platform is
                a breeze to navigate.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-lg block mb-2">Global Reach</strong>
              <p className="text-gray-700">
                Connect with a diverse audience of travelers from around the
                world. Expand your reach and welcome guests from every corner of
                the globe.
              </p>
            </div>
            <div className="mb-4">
              <strong className="text-lg block mb-2">
                Secure Transactions
              </strong>
              <p className="text-gray-700">
                Trust is at the core of MPSafaric. Our secure platform ensures
                that all transactions are safe and transparent, providing peace
                of mind for both hosts and guests.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-gray-700 mb-4 text-center">
            At MPSafaric, we're not just a platform; we're a community of
            passionate travelers and hospitality enthusiasts. Our mission is to
            bridge the gap between dream destinations and unforgettable stays.
          </p>
          <p className="text-gray-700 mb-4 text-center">
            Ready to embark on this journey with us?{" "}
            <Link to="/register" className="text-blue-500">
              Sign Up Now
            </Link>{" "}
            and let MPSafaric be your guide in the world of travel and
            hospitality.
          </p>
          <p className="text-gray-700 mb-4 text-center">
            Have questions or need assistance? Reach out to our{" "}
            <Link to="#" className="text-blue-500">
              Support Team
            </Link>{" "}
            — we're here for you.
          </p>
        </section>

        {/* Tips Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel Tip 1"
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <p className="text-gray-700 text-center">
                Tip 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel Tip 2"
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <p className="text-gray-700 text-center">
                Tip 2: Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
            </div>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel Tip 3"
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <p className="text-gray-700 text-center">
                Tip 3: Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>

        <p className="text-gray-700 mt-8 text-center">
          Happy travels, The MPSafaric Team
        </p>
      </div>
    </div>
  );
};

export default About;
