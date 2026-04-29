function ProfitSummary({ finalProfit }) {

    const profitColor =
        finalProfit > 0
            ? "text-green-600"
            : finalProfit < 0
                ? "text-red-600"
                : "text-gray-600";


    const labelText =
        finalProfit > 0
            ? "Profit"
            : finalProfit < 0
                ? "Loss"
                : "Break-even";


    const labelColor =
        finalProfit > 0
            ? "bg-green-100 text-green-700"
            : finalProfit < 0
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-700";


    return (

        <div>

            <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${labelColor}`}
            >
                {labelText}
            </div>


            <h2
                className={`mt-4 text-4xl font-bold ${profitColor}`}
            >
                {finalProfit.toLocaleString()}
            </h2>


            <p className="text-gray-500 mt-2">
                Net silver after marketplace deductions
            </p>

        </div>

    );

}

export default ProfitSummary;