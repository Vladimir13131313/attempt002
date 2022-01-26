import React from 'react';
import './FormTabs.scss';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

export const FormTabs = ({title, children, currentValue, disability}) => {
    return (
        <div>
            <div className="tab-title">{title}</div>
            <TabsUnstyled defaultValue={1} value={currentValue}>
                <TabsListUnstyled>
                    <div className="tab-line"></div>
                    <TabUnstyled disabled={disability.firstStep}>1</TabUnstyled>
                    <div className="tab-line"></div>
                    <TabUnstyled disabled={disability.secondStep}>2</TabUnstyled>
                    <div className="tab-line"></div>
                    <TabUnstyled disabled={disability.thirdStep}>3</TabUnstyled>
                    <div className="tab-line"></div>
                </TabsListUnstyled>
                {children}
                
            </TabsUnstyled>
        </div>
    );
};