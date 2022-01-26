import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Table} from '../Table/Table';
import {ContentPanel} from '../ContentPanel/ContentPanel';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import {ModalWindow} from '../Modals/Modal';
import {SuccessForm} from '../SuccessForm/SuccessForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import successPic from '../../assets/images/success_cargo.png';
import { useNavigate } from 'react-router-dom';
import {StepperForm} from '../StepperForm/StepperForm';
import {FormTabs} from'../FormTabs/FormTabs';
import {AddCargoForm} from './AddCargoForm/AddCargoForm';
import {ChoosingMethodForm} from '../ChosingMethodForm/ChoosingMethodForm';
import planeBtn from '../../assets/images/planeBtn.svg';
import planeBtnOrange from '../../assets/images/planeBtnOrange.svg';
import seaBtn from '../../assets/images/seaBtn.svg';
import seaBtnOrange from '../../assets/images/seaBtnOrange.svg';
import carBtn from '../../assets/images/carBtn.svg';
import carBtnOrange from '../../assets/images/carBtnOrange.svg';
import cardBtn from '../../assets/images/cardBtn.svg';
import cardBtnOrange from '../../assets/images/cardBtnOrange.svg';
import paypalBtn from '../../assets/images/paypalBtn.svg';
import paypalBtnOrange from '../../assets/images/paypalBtnOrange.svg';
import cashBtn from '../../assets/images/cashBtn.svg';
import cashBtnOrange from '../../assets/images/cashBtnOrange.svg';



export const WarehouseIndividualPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const [successModal, setSuccessModal] = useState(false);
    const [activeStep, setActiveStep] = useState(1);
    const [radioValue, setRadioValue] = useState("A");
    const [contentList, setContentList] = useState([])
    const [planeButtonPic, setPlaneButtonPic] = useState(planeBtn);
    const [seaButtonPic, setSeaButtonPic] = useState(seaBtn);
    const [carButtonPic, setCarButtonPic] = useState(carBtn);
    const [cardButtonPic, setCardButtonPic] = useState(cardBtn);
    const [paypalButtonPic, setPaypalButtonPic] = useState(paypalBtn);
    const [cashButtonPic, setCashButtonPic] = useState(cashBtn);
    const [disabled, setDisabled] = useState({
        firstStep: false,
        secondStep: true,
        thirdStep: true,
    });
    const shipmentButtonList = [
        {
            pic: planeButtonPic,
            func: shipmentByPlane,
        },
        {
            pic: seaButtonPic,
            func: shipmentBySea,
        },
        {
            pic: carButtonPic,
            func: shipmentByCar,
        },
    ];
    const paymentButtonList = [
        {
            pic: cardButtonPic,
            func: paymentByCard,
        },
        {
            pic: paypalButtonPic,
            func: paymentByPaypal,
        },
        {
            pic: cashButtonPic,
            func: paymentByCash,
        },
    ];
    const [shipmentMethod, setShipmentMethod] = useState({
        plane: false,
        sea: false,
        car: false,
    });
    const [paymentMethod, setPaymentMethod] = useState({
        card: false,
        paypal: false,
        cash: false,
    });
    const {id} = useParams();
    const warehouses = "warehouses"
    let allWarehouses = [];
    const productData = 'product data';

    useEffect(() => {
        parseProductList();
    }, [])

    function processData () {
        allWarehouses = JSON.parse(localStorage.getItem(warehouses));
    }

    processData();

    const headers = [
        "All products",
        "Manufacturer",
        "Item number",
        "Purchasing technology",
        "Shipment method"
    ]

    const trainingList = [
        [
            "All products",
            "Manufacturer",
            "Item number",
            "Purchasing technology",
            "Shipment method"
        ]
    ]

    const formTitles = [
        "Adding a product",
        "Shipping method",
        "Payment method"
    ]

    function openModalWindow () {
        setOpenModal(true)
    }
    function closeModal() {
        setOpenModal(false);
        chooseShipment(false, false, false);
        paintButton(planeBtn, seaBtn, carBtn);
        setRadioValue("A");
        setActiveStep(1)
        setDisabled({
            firstStep: false,
            secondStep: true,
            thirdStep: true,
        })
        formik.resetForm();
    }
    function openSuccessModal() {
        setSuccessModal(true);
    }
    function closeSuccessModal() {
        setSuccessModal(false)
    }

    function titleNumber () {
        switch (activeStep) {
            case 1:
                return 0;
            case 3:
                return 1;
            case 5:
                return 2;
        }
    }

    function navigate() {}

    function check() {}

    const formik = useFormik({
        initialValues: {
            name: '',
            manufacturer: '',
            number: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name must be entered'),
            manufacturer: Yup.string()
                .required('Name must be entered'),
            number: Yup.string()
                .required('Name must be entered'),
        }),
        onSubmit: values => {
            let data = {};
            data.name = values.name;
            data.manufacturer = values.manufacturer;
            data.number = values.number;
            data.purchase = radioValue;
            setActiveStep(3);
            setDisabled({
                firstStep: true,
                secondStep: false,
                thirdStep: true,
            });
            localStorage.setItem(productData, JSON.stringify(data))
        },
    });

    function shipmentByPlane () {
        chooseShipment(true, false, false);
        paintButton(planeBtnOrange, seaBtn, carBtn);
    }
    function shipmentBySea () {
        chooseShipment(false, true, false);
        paintButton(planeBtn, seaBtnOrange, carBtn);
    }
    function shipmentByCar () {
        chooseShipment(false, false, true);
        paintButton(planeBtn, seaBtn, carBtnOrange);
    }
    function paymentByCard () {
        choosePayment(true, false, false);
        paintPayButton(cardBtnOrange, paypalBtn, cashBtn);
    }
    function paymentByPaypal () {
        choosePayment(false, true, false);
        paintPayButton(cardBtn, paypalBtnOrange, cashBtn);
    }
    function paymentByCash () {
        choosePayment(false,false, true);
        paintPayButton(cardBtn, paypalBtn, cashBtnOrange);
    }

    function goToLastStep() {
        if (shipmentMethod.plane || shipmentMethod.sea || shipmentMethod.car) {
            let data = JSON.parse(localStorage.getItem(productData));
            if (shipmentMethod.plane) {
                data.shipment = "plane"
            } else if (shipmentMethod.sea) {
                data.shipment = "sea"
            } else if (shipmentMethod.car) {
                data.shipment = "car"
            }
            localStorage.setItem(productData, JSON.stringify(data));
            setActiveStep(5);
            setDisabled({
                firstStep: true,
                secondStep: true,
                thirdStep: false,
            });
        }
    }

    function chooseShipment(plane, sea, car) {
        setShipmentMethod({
            plane: plane,
            sea: sea,
            car: car,
        });
    }
    function paintButton(plane, sea, car) {
        setPlaneButtonPic(plane);
        setSeaButtonPic(sea);
        setCarButtonPic(car);
    }
    function choosePayment(card, paypal, cash) {
        setPaymentMethod({
            card: card,
            paypal: paypal,
            cash: cash,
        });
    }
    function paintPayButton(card, paypal, cash) {
        setCardButtonPic(card);
        setPaypalButtonPic(paypal);
        setCashButtonPic(cash);
    }

    function finishAdding() {
        if (paymentMethod.card || paymentMethod.paypal || paymentMethod.cash) {
            updateProductList();
            parseProductList();
            closeModal();
            openSuccessModal();
        }
    }
    function updateProductList() {
        let listOfWarehouses = JSON.parse(localStorage.getItem(warehouses));
        let currentProduct = JSON.parse(localStorage.getItem(productData));
        if (listOfWarehouses[id].products) {
            listOfWarehouses[id].products.push(currentProduct);
        } else {
            listOfWarehouses[id].products = [];
            listOfWarehouses[id].products.push(currentProduct);
        }
        localStorage.setItem(warehouses, JSON.stringify(listOfWarehouses));
    }
    function parseProductList() {
        let listOfProducts = JSON.parse(localStorage.getItem(warehouses))[id].products;
        let listOfLists = [];
        if (listOfProducts) {
            listOfProducts.forEach(product => {
                let pic = '';
                if (product.shipment === "plane"){
                    pic = "подменить картинкой самолета";
                } else if (product.shipment === "sea") {
                    pic = "подменить картинкой корабля";
                } else if (product.shipment === "car") {
                    pic = "подменить картинкой грузовика"
                }
                listOfLists.push([
                    product.name,
                    product.manufacturer,
                    product.number,
                    product.purchase,
                    pic,
                ])
            })
            setContentList(listOfLists);
        }
    }
    
    return (
        <div>
            <ContentPanel
                title={allWarehouses[id].name}
                containButtons={true}
                buttonStyles="common_button add_warehouse_btn"
                buttonText="Add cargo + "
                buttonFunc={openModalWindow}
            />
            <Table headerList={headers} contentList={contentList} navigate={navigate} check={check}/>
            <ModalWindow open={openModal} close={closeModal}>
                <FormTabs title={formTitles[titleNumber()]} currentValue={activeStep} disability={disabled}>
                    <TabPanelUnstyled value={1}>
                        <AddCargoForm buttonTitle="Next step" formik={formik} radio={radioValue} radioChange={setRadioValue}/>
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={3}>
                        <ChoosingMethodForm
                            buttonList={shipmentButtonList}
                            ActBtnName="Next step"
                            ActBtnFunc={goToLastStep}
                            labelTxt="Select delivery method"
                        />
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={5}>
                        <ChoosingMethodForm
                            buttonList={paymentButtonList}
                            ActBtnName="Choose"
                            ActBtnFunc={finishAdding}
                            labelTxt="Choose a payment method"
                        />
                    </TabPanelUnstyled>
                </FormTabs>
            </ModalWindow>
            <ModalWindow open={successModal} close={closeSuccessModal} >
                <SuccessForm mainPic={successPic} header="Cargo was successfully created" btnFunc={closeSuccessModal}/>
            </ModalWindow>
        </div>
    );
};