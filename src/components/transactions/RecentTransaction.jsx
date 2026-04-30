function RecentTransactions({ transactions }) {

    const recent =
        [...transactions]
            .reverse()
            .slice(0, 5);


    return (

        <div>

            <h3 className="text-lg font-semibold mb-4">
                Recent Transactions
            </h3>


            <div className="space-y-2">

                {

                    recent.map((t, index) => (

                        <div
                            key={index}
                            className="flex justify-between"
                        >

                            <span>

                                {t.category}

                            </span>


                            <span
                                className={
                                    t.type === "income"
                                        ? "text-green-600"
                                        : "text-red-600"
                                }
                            >

                                {t.type === "income"
                                    ? "+"
                                    : "-"
                                }

                                {t.amount.toLocaleString()}

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default RecentTransactions;