import { useState } from "react";

function ProfitCalculator() {
    const [animals, setAnimals] = useState(36);
    const [babyPrice, setBabyPrice] = useState(2000);
    const [returnRate, setReturnRate] = useState(0.7);
    const [foodPrice, setFoodPrice] = useState(5000);
    const [foodProduced, setFoodProduced] = useState(9);

    const missingAnimals = animals * (1 - returnRate);

    const replacementCost =
        missingAnimals * babyPrice;

    const revenue =
        foodProduced * foodPrice;

    const profit =
        revenue - replacementCost;

    return (
        <div>

            <h2>Albion Profit Calculator</h2>

            <label>Animals</label>
            <input
                type="number"
                value={animals}
                onChange={(e) =>
                    setAnimals(Number(e.target.value))
                }
            />

            <label>Baby Price</label>
            <input
                type="number"
                value={babyPrice}
                onChange={(e) =>
                    setBabyPrice(Number(e.target.value))
                }
            />

            <label>Return Rate</label>
            <input
                type="number"
                step="0.01"
                value={returnRate}
                onChange={(e) =>
                    setReturnRate(Number(e.target.value))
                }
            />

            <label>Food Price</label>
            <input
                type="number"
                value={foodPrice}
                onChange={(e) =>
                    setFoodPrice(Number(e.target.value))
                }
            />

            <label>Food Produced</label>
            <input
                type="number"
                value={foodProduced}
                onChange={(e) =>
                    setFoodProduced(Number(e.target.value))
                }
            />

            <h3>Replacement Cost: {replacementCost}</h3>

            <h3>Revenue: {revenue}</h3>

            <h2>Profit: {profit}</h2>

        </div>
    );
}

export default ProfitCalculator;