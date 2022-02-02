import React from 'react';
import square from '../../../assets/images/Rectangle 1384.svg';
import checkedSquare from '../../../assets/images/check.svg'

export const Table = ({headerList, contentList, navigate, check, checkAll, allChecked}) => {
    return (
        <div className="warehouses_list">
            <table className="table" id="warehouse_table">
                <tbody>
                <tr>
                    <th><img src={allChecked ? checkedSquare : square} alt="square" onClick={() => checkAll()}/></th>
                    {headerList && headerList.map(header => (
                        <th key={headerList.indexOf(header)}>{header}</th>
                    ))}
                </tr>
                {contentList && contentList.map(contentItem => (
                    <tr key={contentItem[0]} onClick={event => {navigate(event, contentList.indexOf(contentItem))}}>
                        <th><img src={contentItem.checked ? checkedSquare : square} alt="square" onClick={() => check(contentList.indexOf(contentItem))}/></th>
                        <th>{contentItem.name}</th>
                        <th>{contentItem.man}</th>
                        <th>{contentItem.number}</th>
                        <th>{contentItem.purch}</th>
                        <th><img src={contentItem.shipment}/></th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};