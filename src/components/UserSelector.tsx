import React from "react";

interface Props {
    currentUserIndex: number;
    setCurrentUserIndex: (index: number) => void;
    userNames: string[];
}

const UserSelector: React.FC<Props> = ({ currentUserIndex, setCurrentUserIndex, userNames }) => {
    return (
        <div>
            {userNames.map((name, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentUserIndex(index)}
                    style={{ fontWeight: currentUserIndex === index ? "bold" : "normal" }}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};

export default UserSelector;
