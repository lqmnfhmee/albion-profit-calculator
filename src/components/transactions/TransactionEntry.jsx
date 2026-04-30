import { useState } from "react";

function TransactionEntry({ addTransaction }) {

    const [type, setType] = useState("expense");

    const [category, setCategory] =
        useState("Ingredient Purchase");

    const [amount, setAmount] = useState("");

    const [note, setNote] = useState("");



    const handleSubmit = () => {

        if (!amount) return;

        addTransaction({

            type,
            category,
            amount: Number(amount),
            note,
            timestamp: new Date()

        });

        setAmount("");
        setNote("");

    };



    return (

        <div>

            <h3 className="text-lg font-semibold mb-4">
                Add Transaction
            </h3>


            <div className="space-y-3">


                <select
                    value={type}
                    onChange={(e) =>
                        setType(e.target.value)
                    }
                    className="border rounded-lg p-2 w-full"
                >

                    <option value="expense">
                        Expense
                    </option>

                    <option value="income">
                        Income
                    </option>

                </select>


                <select
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                    className="border rounded-lg p-2 w-full"
                >

                    <option>Market Sale</option>
                    <option>Ingredient Purchase</option>
                    <option>Animal Purchase</option>
                    <option>Seed Purchase</option>
                    <option>Craft Fee</option>
                    <option>Butcher Fee</option>
                    <option>Transport Cost</option>
                    <option>Player Trade</option>

                </select>


                <input
                    placeholder="Amount"
                    type="number"
                    value={amount}
                    onChange={(e) =>
                        setAmount(e.target.value)
                    }
                    className="border rounded-lg p-2 w-full"
                />


                <input
                    placeholder="Optional note"
                    value={note}
                    onChange={(e) =>
                        setNote(e.target.value)
                    }
                    className="border rounded-lg p-2 w-full"
                />


                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >

                    Add Transaction

                </button>


            </div>

        </div>

    );

}

export default TransactionEntry;