import { useState } from "react";

function ProfitCalculator() {

    // --------------------
    // FARMING SECTION
    // --------------------

    const [city, setCity] = useState("");

    const [babyAnimalCost, setBabyAnimalCost] = useState("");
    const [foodCost, setFoodCost] = useState("");
    const [seedCost, setSeedCost] = useState("");
    const [travelCost, setTravelCost] = useState("");

    // --------------------
    // CRAFTING SECTION
    // --------------------

    const [butcherFee, setButcherFee] = useState("");
    const [craftFee, setCraftFee] = useState("");

    const [ingredients, setIngredients] = useState([
        { name: "", cost: "" }
    ]);

    const updateIngredient = (index, field, value) => {

        const updated = [...ingredients];

        updated[index][field] = value;

        setIngredients(updated);
    };

    const addIngredient = () => {

        setIngredients([
            ...ingredients,
            { name: "", cost: "" }
        ]);

    };

    const ingredientCostTotal =
        ingredients.reduce(
            (total, item) =>
                total + Number(item.cost || 0),
            0
        );

    // --------------------
    // SELLING SECTION
    // --------------------

    const [itemName, setItemName] = useState("");
    const [amount, setAmount] = useState("");
    const [pricePerItem, setPricePerItem] = useState("");

    const [isPremium, setIsPremium] = useState(true);

    // --------------------
    // CALCULATIONS
    // --------------------

    const totalFarmingCost =
        Number(babyAnimalCost || 0) +
        Number(foodCost || 0) +
        Number(seedCost || 0) +
        Number(travelCost || 0);

    const totalCraftingCost =
        Number(butcherFee || 0) +
        Number(craftFee || 0) +
        ingredientCostTotal;

    const grossRevenue =
        Number(amount || 0) *
        Number(pricePerItem || 0);

    const setupFee =
        grossRevenue * 0.025;

    const taxRate =
        isPremium ? 0.04 : 0.08;

    const marketplaceTax =
        grossRevenue * taxRate;

    const silverReceived =
        grossRevenue -
        setupFee -
        marketplaceTax;

    const totalCost =
        totalFarmingCost +
        totalCraftingCost;

    const finalProfit =
        silverReceived -
        totalCost;

    // --------------------
    // UI
    // --------------------

    return (

        <div>

            <h2>Albion Profit Calculator</h2>

            <hr />

            <h3>Farming Expenses</h3>

            City

            <select
                value={city}
                onChange={(e) =>
                    setCity(e.target.value)
                }
            >

                <option value="">Select City</option>
                <option>Thetford</option>
                <option>Martlock</option>
                <option>Fort Sterling</option>
                <option>Lymhurst</option>
                <option>Bridgewatch</option>
                <option>Brecillien</option>
                <option>Caerleon</option>

            </select>

            <br /><br />

            Baby Animal Cost
            <input
                onChange={e =>
                    setBabyAnimalCost(e.target.value)
                }
            />

            Food Cost
            <input
                onChange={e =>
                    setFoodCost(e.target.value)
                }
            />

            Seed Cost
            <input
                onChange={e =>
                    setSeedCost(e.target.value)
                }
            />

            Travel Cost
            <input
                onChange={e =>
                    setTravelCost(e.target.value)
                }
            />

            <p>Total Farming Cost: {totalFarmingCost}</p>

            <hr />

            <h3>Crafting Expenses</h3>

            Butcher Fee
            <input
                onChange={e =>
                    setButcherFee(e.target.value)
                }
            />

            Craft Fee
            <input
                onChange={e =>
                    setCraftFee(e.target.value)
                }
            />

            <h4>Ingredient Costs</h4>

            {

                ingredients.map((ingredient, index) => (

                    <div key={index}>

                        Name

                        <input
                            value={ingredient.name}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    "name",
                                    e.target.value
                                )
                            }
                        />

                        Cost

                        <input
                            type="number"
                            value={ingredient.cost}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    "cost",
                                    e.target.value
                                )
                            }
                        />

                    </div>

                ))

            }

            <button onClick={addIngredient}>
                Add Ingredient
            </button>

            <p>
                Total Ingredient Cost:
                {ingredientCostTotal}
            </p>

            <p>
                Total Crafting Cost:
                {totalCraftingCost}
            </p>

            <hr />

            <h3>Selling Setup</h3>

            Item Name

            <input
                onChange={e =>
                    setItemName(e.target.value)
                }
            />

            Amount

            <input
                onChange={e =>
                    setAmount(e.target.value)
                }
            />

            Price Per Item

            <input
                onChange={e =>
                    setPricePerItem(e.target.value)
                }
            />

            Premium Account

            <input
                type="checkbox"
                checked={isPremium}
                onChange={() =>
                    setIsPremium(!isPremium)
                }
            />

            <p>
                Setup Fee (2.5%):
                {setupFee.toFixed(0)}
            </p>

            <p>
                Marketplace Tax:
                {marketplaceTax.toFixed(0)}
            </p>

            <p>
                Silver Received:
                {silverReceived.toFixed(0)}
            </p>

            <hr />

            <h2>
                Final Profit:
                {finalProfit.toFixed(0)}
            </h2>

        </div>

    );
}

export default ProfitCalculator;