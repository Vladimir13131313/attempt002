import React from 'react';
import square from '../../assets/images/Rectangle 1384.svg'
import plane from '../../assets/images/Group 36487.svg';
import sea from '../../assets/images/Group 36486.svg';
import car from '../../assets/images/Group 36485.svg';

export const Table = ({headerList, contentList, navigate, check}) => {
    let loly = contentList[1]

    let i = 0;
    function mapObject (content) {
        try {
            let valuesArray = Object.values(content);
            let string = ''
            return `
            
            `
        } catch (e) {
            console.log(e)
        }
    }
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
                        {mapObject(contentItem)}
                        {Object.values(contentItem).map((item, index) => (
                            <th key={i++}>
                                {item}
                            </th>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};