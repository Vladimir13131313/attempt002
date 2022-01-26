import React from 'react';
import square from '../../assets/images/Rectangle 1384.svg'
import plane from '../../assets/images/Group 36487.svg';
import sea from '../../assets/images/Group 36486.svg';
import car from '../../assets/images/Group 36485.svg';

export const Table = ({headerList, contentList, navigate, check}) => {
    let i = 0;
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
                            <th><img src={square} alt="square" onClick={check}/></th>
                            {contentItem.map(it => (
                                <th key={i++}>
                                    {it === "подменить картинкой самолета" ? <img src={plane} alt="by plane"/>
                                        : it === "подменить картинкой корабля" ? <img src={sea} alt="by plane"/>
                                            : it === "подменить картинкой грузовика" ? <img src={car} alt="by plane"/> : it }
                                </th>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};