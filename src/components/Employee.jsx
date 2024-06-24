import React from 'react'
import EmployeeCard from "../components/Cards/EmployeeCard"

const Employee = () => {
    return (
        <>
            <section class="flex items-center justify-center py-20 bg-white min-w-screen max-w-[1200px] w-full mx-auto">
                <div class="px-16 bg-white">
                    <div class="container flex flex-col items-start mx-auto lg:items-center">
                        <p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-yellow-300 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>


                        <h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                </path>
                            </svg>
                            See what others are saying</h2>
                        <div class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

                        <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
                            {[1, 2, 3].map((v, index) => {
                                return <EmployeeCard key={index} />
                            })}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Employee