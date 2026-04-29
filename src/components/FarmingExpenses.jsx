function FarmingExpenses({

    babyAnimalCost,
    setBabyAnimalCost,
    foodCost,
    setFoodCost,
    seedCost,
    setSeedCost,
    travelCost,
    setTravelCost,
    totalFarmingCost

}) {

    return (

        <div>

            <h3 className="text-lg font-semibold mb-4">
                Farming Expenses
            </h3>


            <div className="grid grid-cols-2 gap-4">


                <div>

                    <label className="text-sm font-medium">
                        Baby Animal Cost
                    </label>

                    <input
                        value={babyAnimalCost}
                        onChange={(e) =>
                            setBabyAnimalCost(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


                <div>

                    <label className="text-sm font-medium">
                        Food Cost
                    </label>

                    <input
                        value={foodCost}
                        onChange={(e) =>
                            setFoodCost(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


                <div>

                    <label className="text-sm font-medium">
                        Seed Cost
                    </label>

                    <input
                        value={seedCost}
                        onChange={(e) =>
                            setSeedCost(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


                <div>

                    <label className="text-sm font-medium">
                        Travel Cost
                    </label>

                    <input
                        value={travelCost}
                        onChange={(e) =>
                            setTravelCost(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


            </div>


            <p className="mt-4 text-gray-600">
                Total Farming Cost: {totalFarmingCost}
            </p>

        </div>

    );

}

export default FarmingExpenses;