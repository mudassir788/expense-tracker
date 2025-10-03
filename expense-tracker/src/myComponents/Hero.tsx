
function Hero() {
    return (
        <section className="bg-white lg:grid  lg:place-content-center flex flex-col items-center">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Manage Your Expense
                        <strong className="text-indigo-600"> <br />Control Your Money</strong>

                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        start creating your budgets and save tons of the Money
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                            href="#"

                        >
                            Get Started
                        </a>


                    </div>

                </div>

            </div>
            <img src="/dashbord.png" alt="dasbord"
                width={1000}
                height={600}
                className="mt-5 rounded-2xl border-2 mx-auto " />

        </section>


    )
}

export default Hero