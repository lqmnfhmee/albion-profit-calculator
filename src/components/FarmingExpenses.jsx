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

            <h3>Farming Expenses</h3>



            Baby Animal Cost

            <input
                value={babyAnimalCost}
                onChange={(e) =>
                    setBabyAnimalCost(e.target.value)
                }
            />

            Food Cost

            <input
                value={foodCost}
                onChange={(e) =>
                    setFoodCost(e.target.value)
                }
            />

            Seed Cost

            <input
                value={seedCost}
                onChange={(e) =>
                    setSeedCost(e.target.value)
                }
            />

            Travel Cost

            <input
                value={travelCost}
                onChange={(e) =>
                    setTravelCost(e.target.value)
                }
            />

            <p>Total Farming Cost: {totalFarmingCost}</p>

            <hr />

        </div>

    );

}

export default FarmingExpenses;