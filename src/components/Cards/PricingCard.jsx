import React from 'react'

const PricingCard = () => {
    return (
        <>
            <div class="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                    Basic
                </h3>
                <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                    The basic plan is a good fit for smaller teams and startups
                </p>
                <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                    <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                        $19
                    </p>
                    <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                        per user <span class="block">per month</span>
                    </p>
                </div>

                <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-black no-underline bg-transparent border border-b-2 border-yellow-400 rounded-md cursor-pointer hover:bg-yellow-300 hover:border-yellow-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                    Select Plan
                </button>
            </div>
        </>
    )
}

export default PricingCard
