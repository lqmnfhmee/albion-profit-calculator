function ProfitSummary({ finalProfit }) {

    const isProfit = finalProfit > 0;
    const isLoss = finalProfit < 0;


    const profitColor =
        isProfit
            ? "text-green-600"
            : isLoss
                ? "text-red-600"
                : "text-gray-600";


    const labelText =
        isProfit
            ? "Profit"
            : isLoss
                ? "Loss"
                : "Break-even";


    const labelColor =
        isProfit
            ? "bg-green-100 text-green-700"
            : isLoss
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-700";


    const sign =
        isProfit
            ? "+"
            : "";


    return (

        <div className="flex flex-col items-center">

            {/* Status badge */}

            <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${labelColor}`}
            >

                {labelText}

            </div>


            {/* Profit value */}

            <h2
                className={`mt-4 text-4xl font-bold ${profitColor}`}
            >

                {sign}
                {finalProfit.toLocaleString()}
                <span className="text-lg ml-1 text-gray-400">
                    silver
                </span>

            </h2>


            {/* Subtitle */}

            <p className="text-gray-500 mt-2 text-center">

                Net result after marketplace taxes & setup fee

            </p>


        </div>

    );

}

export default ProfitSummary;