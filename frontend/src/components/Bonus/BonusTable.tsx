import React from "react";
import ResponsiveTable from "../App/ResponsiveTable";

const BonusTable: React.FC = () => {
    const headers = [
        "Code",
        "Type",
        "Rank",
        "Name",
        "Starting Date",
        "Total Earnings",
        "Bonus Detail",
    ];

    const data = [
        [
            "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
        [
            "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
        [
            "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
        [
             "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
        [
            "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
        [
             "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
        [
            "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
        [
            "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
        [
            "000001",
            "A",
            "👤",
            "Htet Myat",
            "01/07/2025",
            "3600฿",
            <>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </>,
        ],
    ];

    return (
        <div className="">
            <ResponsiveTable headers={headers} data={data} />
        </div>
    );
};

export default BonusTable;
