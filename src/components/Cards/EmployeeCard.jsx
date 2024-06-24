import React from 'react'

const EmployeeCard = () => {


  return (
    <>
      <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
        <div class="flex items-center justify-center">
          <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full object-cover">
            <img src="https://demo.misbahwp.com/taxi-booking/wp-content/themes/taxi-booking-pro/images/testimonial/testimonial4.png" />
          </div>
          <div class="flex flex-col items-start justify-center">
            <h4 class="font-bold text-gray-800">Michael Brown</h4>
            <p class="text-gray-600">CTO of Creative Enterprises</p>
          </div>
        </div>
        <blockquote class="mt-8 text-lg text-gray-500">"This toolset revolutionized the way we manage our projects. For anyone aiming to enhance their business capabilities, this is a must-have!"</blockquote>
      </div>
    </>
  )
}

export default EmployeeCard