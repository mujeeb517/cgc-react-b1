import { useState } from "react";

function Display({ value }) {
    return <div>
        <input value={value} className="p-2 border border-gray-500 rounded text-right" disabled type="text" placeholder="00" />
    </div>
}

function Button({ val, isOperator, onInputChange }) {
    const onBtnClick = () => {
        onInputChange({ val, isOperator });
    };

    return <div className="w-full">
        <button onClick={onBtnClick} className="bg-orange-500 w-10 hover:bg-orange-600 hover:text-white font-bold px-3 py-1">{val}</button>
    </div>
}

function Calculator() {
    const [value, setValue] = useState(0);
    const [op, setOp] = useState(null);

    const onInputChange = ({ val, isOperator }) => {
        if (isOperator) {
            setOp(val);
        } else {
            if (value === 0 || op) {
                setValue(val);
            } else {
                const newValue = value + '' + val;
                setValue(newValue);
            }
        }
    };

    const config = [{
        value: 7,
        isOperator: false
    }, {
        value: 8,
        isOperator: false
    }, {
        value: 9,
        isOperator: false
    }, {
        value: "/",
        isOperator: true
    },

    {
        value: 4,
        isOperator: false
    }, {
        value: 5,
        isOperator: false
    }, {
        value: 6,
        isOperator: false
    }, {
        value: "*",
        isOperator: true
    },

    {
        value: 1,
        isOperator: false
    }, {
        value: 2,
        isOperator: false
    }, {
        value: 3,
        isOperator: false
    }, {
        value: "-",
        isOperator: true
    },
    {
        value: 0,
        isOperator: false
    }, {
        value: ".",
        isOperator: false
    }, {
        value: "+",
        isOperator: true
    }, {
        value: "=",
        isOperator: true
    }];

    return (<div className="m-4 w-1/4">
        <Display value={value} />
        <div className="grid grid-cols-4 mt-2 mb-2 gap-4">
            {config.map(cfg => <Button onInputChange={onInputChange} val={cfg.value} isOperator={cfg.isOperator} />)}
        </div>
    </div>);
}

export default Calculator;