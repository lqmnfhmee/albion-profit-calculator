import { useState } from "react";

function ProfitCalculator() {

    // ------------------------
    // ANIMAL INPUTS
    // ------------------------

    const [animals, setAnimals] = useState(36);
    const [babyPrice, setBabyPrice] = useState(2000);
    const [returnRate, setReturnRate] = useState(0.7);

    // ------------------------
    // FEED INPUTS
    // ------------------------

    const [feedPerAnimal, setFeedPerAnimal] = useState(9);
    const [feedPrice, setFeedPrice] = useState(100);

    // ------------------------
    // CROP INPUTS
    // ------------------------

    const [plots, setPlots] = useState(11);
    const [seedReturnRate, setSeedReturnRate] = useState(0.85);
    const [seedPrice, setSeedPrice] = useState(140);

    // ------------------------
    // CRAFTING INPUTS
    // ------------------------

    const [butcherCostPerAnimal, setButcherCostPerAnimal] = useState(120);
    const [animalsButchered, setAnimalsButchered] = useState(36);

    const [stationFeePerBatch, setStationFeePerBatch] = useState(1800);
    const [batchesCrafted, setBatchesCrafted] = useState(9);

    // ------------------------
    // MISSING INGREDIENT SYSTEM
    // ------------------------

    const [ingredients, setIngredients] = useState([
        { name: "egg", quantity: 72, price: 400 }
    ]);

    const updateIngredient = (index, field, value) => {

        const updated = [...ingredients];

        updated[index][field] = value;

        setIngredients(updated);
    };

    const addIngredient = () => {

        setIngredients([
            ...ingredients,
            { name: "", quantity: 0, price: 0 }
        ]);
    };

    // Calculate missing ingredient cost

    const ingredientCost =
        ingredients.reduce(
            (total, item) =>
                total +
                item.quantity * item.price,
            0
        );

    // ------------------------
    // SELLING INPUTS
    // ------------------------

    const [foodProduced, setFoodProduced] = useState(9);
    const [foodPrice, setFoodPrice] = useState(5000);

    const [travelCost, setTravelCost] = useState(3000);

    const [isPremium, setIsPremium] = useState(true);

    // ------------------------
    // CALCULATIONS
    // ------------------------

    const missingAnimals =
        animals * (1 - returnRate);

    const replacementCost =
        missingAnimals * babyPrice;

    const feedCost =
        animals *
        feedPerAnimal *
        feedPrice;

    const missingSeeds =
        plots * (1 - seedReturnRate);

    const seedCost =
        missingSeeds * seedPrice;

    const farmingCost =
        replacementCost +
        feedCost +
        seedCost +
        travelCost;

    const butcherCost =
        animalsButchered *
        butcherCostPerAnimal;

    const stationCost =
        batchesCrafted *
        stationFeePerBatch;

    const craftingCost =
        butcherCost +
        stationCost +
        ingredientCost;

    const grossRevenue =
        foodProduced *
        foodPrice;

    const setupFee =
        grossRevenue * 0.025;

    const taxRate =
        isPremium ? 0.04 : 0.08;

    const marketplaceTax =
        grossRevenue * taxRate;

    const sellingCost =
        setupFee +
        marketplaceTax;

    const totalCost =
        farmingCost +
        craftingCost +
        sellingCost;

    const profit =
        grossRevenue - totalCost;

    const breakEvenPrice =
        totalCost / foodProduced;

    // ------------------------
    // UI
    // ------------------------

    return (

        <div>

            <h2>Albion Profit Calculator</h2>

            <hr />

            <h3>Missing Ingredients</h3>

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

                        Quantity
                        <input
                            type="number"
                            value={ingredient.quantity}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    "quantity",
                                    Number(e.target.value)
                                )
                            }
                        />

                        Price
                        <input
                            type="number"
                            value={ingredient.price}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    "price",
                                    Number(e.target.value)
                                )
                            }
                        />

                    </div>

                ))

            }

            <button onClick={addIngredient}>
                Add Ingredient
            </button>

            <hr />

            Missing Ingredient Cost: {ingredientCost}

            <hr />

            Farming Cost: {farmingCost}

            Crafting Cost: {craftingCost}

            Selling Cost: {sellingCost}

            Total Cost: {totalCost}

            <hr />

            Revenue: {grossRevenue}

            Break-even Price: {breakEvenPrice.toFixed(2)}

            <hr />

            <h2>Final Profit: {profit}</h2>

        </div>

    );
}

export default ProfitCalculator;