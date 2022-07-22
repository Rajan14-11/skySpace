import React, { Fragment } from 'react'
import { Typography, Stepper, StepLabel, Step, Checkbox } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";

function CheckoutSteps({activeStep}) {

const steps = [
  {
    label: <Typography>Cart</Typography>,
    icon: <LocalShippingIcon />,
  },
  {
    label: <Typography>CheckOut</Typography>,
    icon: <AccountBalanceIcon />,
  },
  {
    label: <Typography>Order Complete</Typography>,
    icon: <LibraryAddCheckIcon />,
  },
];

const stepStyles = {
  boxSizing: "border-box",
};


  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
}

export default CheckoutSteps