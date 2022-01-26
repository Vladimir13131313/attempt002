import React, {useState } from 'react';
import './StepperForm.scss'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export const StepperForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    
    return (
        <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{"sdfas"}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};