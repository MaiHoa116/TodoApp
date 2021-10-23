import { createContext, useState } from "react";

export const TodoContext = createContext({
    data: [],
    setData: () => { },
});

const initData = [
    {
        "id": 1,
        "name": "UseCase Diagram",
        "isCompleted": false,
        "deadline": '2021-10-03'
    },
    {
        "id": 2,
        "name": "Activity Diagram",
        "isCompleted": false,
        "deadline": '2021-10-03'
    },
    {
        "id": 3,
        "name": "Class + Object Diagram",
        "isCompleted": false,
        "deadline": '2021-10-11'
    },
    {
        "id": 4,
        "name": "Sequences Diagram",
        "isCompleted": false,
        "deadline": '2021-10-17'
    },
    {
        "id": 5,
        "name": "Communication diagram",
        "isCompleted": true,
        "deadline": '2021-10-27'
    },
    {
        "id": 6,
        "name": "State diagram",
        "isCompleted": true,
        "deadline": '2021-10-27'
    },
    {
        "id": 7,
        "name": "Deloyment diagram",
        "isCompleted": true,
        "deadline": '2021-10-27'
    },
    {
        "id": 8,
        "name": "Package diagram",
        "isCompleted": true,
        "deadline": '2021-10-27'
    }
];

export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
        }}>
            {children}
        </TodoContext.Provider>
    )
};