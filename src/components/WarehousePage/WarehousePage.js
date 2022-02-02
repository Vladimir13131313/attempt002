import React, {useState, useEffect} from 'react';
import {Table} from './Table/Table';
import {ContentPanel} from '../ContentPanel/ContentPanel';
import {ModalWindow} from '../Modals/Modal';
import {AddForm} from './AddForm/AddForm';
import {SuccessForm} from '../SuccessForm/SuccessForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import successPic from '../../assets/images/Group 36552.png';
import { useNavigate } from 'react-router-dom';

export const WarehousePage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const warehousesList = "warehouses";
    const [listOfWarehouses, setListOfWarehouses] = useState([]) ;
    const navigation = useNavigate();


    useEffect(() => {
        updateProductsNumber();
        getTableList();
    }, []);

    function getTableList () {
        let listOfObjects = JSON.parse(localStorage.getItem(warehousesList));
        setListOfWarehouses(listOfObjects);
        // if (listOfObjects) {
        //     let AllList = []
        //     listOfObjects.forEach(obj => {
        //         let list = [
        //             obj.name, obj.number, obj.length, obj.width, obj.height
        //         ]
        //         AllList.push(list);
        //     });
        //     setListOfWarehouses(AllList);
        // }
    }

    function updateProductsNumber() {
        let listOfObjects = JSON.parse(localStorage.getItem(warehousesList));
        if (listOfObjects) {
            listOfObjects.forEach(obj => {
                if (obj.products) {
                    obj.number = obj.products.length;
                }
            })
        }
        localStorage.setItem(warehousesList, JSON.stringify(listOfObjects));
    }

    function closeModal () {
        setOpenModal(false);
        formik.resetForm();
    }
    function openModalWindow () {
        setOpenModal(true)
    }
    function openSuccessModal () {
        setSuccessModal(true);
    }
    function closeSuccessModal () {
        setSuccessModal(false);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            length: '',
            width: '',
            height: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name must be entered'),
            length: Yup.number()
                .required('length must be entered'),
            width: Yup.number()
                .required('length must be entered'),
            height: Yup.number()
                .required('length must be entered'),
        }),
        onSubmit: values => {
            let list = JSON.parse(localStorage.getItem(warehousesList));
            let obj = values
            obj.number = '0'
            if (list) {
                list.push(obj);
                localStorage.setItem(warehousesList, JSON.stringify(list));
            } else {
                let list = [];
                list.push(obj);
                localStorage.setItem(warehousesList, JSON.stringify(list));
            }
            getTableList();
            closeModal();
            openSuccessModal();
        },
    });

    const headers = [
        "All stores",
        "Number of products",
        "Length, m",
        "Width, m",
        "Height, m"
    ]

    function navigate(event, id) {
        if (event.target.tagName !== "IMG") {
            navigation(`/stores/${id}`)
        }
    }
    function check() {}

    return (
        <div>
            <ContentPanel
                title="Warehouses"
                containButtons={true}
                buttonStyles="common_button add_warehouse_btn"
                buttonText="Add a warehouse + "
                buttonFunc={openModalWindow}
            />
            <Table headerList={headers} contentList={listOfWarehouses} navigate={navigate} check={check}/>
            <ModalWindow open={openModal} close={closeModal}>
                <AddForm
                    formHeader="Adding a warehouse"
                    buttonTitle="Add a warehouse"
                    formik={formik}
                ></AddForm>
            </ModalWindow>
            <ModalWindow open={successModal} close={closeSuccessModal} >
                <SuccessForm mainPic={successPic} header="Warehouse successfully added" btnFunc={closeSuccessModal}/>
            </ModalWindow>
        </div>
    );
};