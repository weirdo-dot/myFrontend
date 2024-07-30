import React from "react";

function Hero() {
  return (
    <section className="mx-auto max-w-full px-4 py-8 md:px-12 md:p-9 lg:px-8">
     <div className="md:p-9 px-4 py-9">
  <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
    <div className="md:w-3/5">
            <h1 className="font-bold text-left">
              Improving Nigeria’s <br />
              Healthcare System With <br />
              <span className="text-blue-800">Quality</span> <span className="text-blue-800">Affordable</span> <br />
              Medications
            </h1>

            <p className="mt-4 text-gray-600">
              Medsaf is a one-stop-shop for hospitals, clinics, and diagnostic
              centers to purchase, manage, and track their crucial medications
              needs with technology We are a curated medication marketplace for
              African hospitals and pharmacies.
            </p>

            <button
             className="py-2 px-12 bg-blue-500 mt-4 rounded text-white text-lg ">
              Get Started
            </button>
          </div>
          <div className="md:w-2/4">
          <img
              src="https://media.istockphoto.com/id/1603361100/photo/portrait-of-black-woman-in-pharmacy-with-tablet-smile-and-online-inventory-list-for-medicine.webp?b=1&s=170667a&w=0&k=20&c=cX9HGU4NrfJ-fI5VMrLzbWrdD6pIqrICaVFYEj4j-1Q="
              alt="pharmacy"
              className="lg:h-[386px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

