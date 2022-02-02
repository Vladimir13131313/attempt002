import React from 'react';
import square from '../../../assets/images/Rectangle 1384.svg'

export const Table = ({headerList, contentList, navigate, check}) => {
    return (
        <div className="warehouses_list">
            <table className="table" id="warehouse_table">
                <tbody>
                <tr>
                    <th><img src={square} alt="square"/></th>
                    {headerList && headerList.map(header => (
                        <th key={headerList.indexOf(header)}>{header}</th>
                    ))}
                </tr>
                {contentList && contentList.map(contentItem => (
                    <tr key={contentItem[0]} onClick={event => {navigate(event, contentList.indexOf(contentItem))}}>
                        <th><img src={square} alt="square" onClick={e => check(e)}/></th>
                        <th>{contentItem.name}</th>
                        <th>{contentItem.number}</th>
                        <th>{contentItem.length}</th>
                        <th>{contentItem.width}</th>
                        <th>{contentItem.height}</th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};