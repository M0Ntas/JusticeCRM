import React, {useState} from 'react';
import './styles.scss'
import Modal from "../../components/Modal/Modal";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import plus from "../../images/icons/plus.svg"

const Home = () => {

    const [form, setForm] = useState({
        store: '',
        price: '',
        productName: '',
        productCategory: '',
        quantityOfGoods: '',
        weightOfItem: '',
    })

    // const title = 'Sales statistics'
    const [open, setOpen] = useState(false)

    const inputs = [
        {
            type: 'text',
            id: 0,
            placeholder: 'Store',
            handler: 'store'
        },
        {
            type: 'number',
            id: 1,
            placeholder: 'Price',
            handler: 'price'
        },
        {
            type: 'text',
            id: 2,
            placeholder: 'Product name',
            handler: 'productName'
        },
        {
            type: 'text',
            id: 3,
            placeholder: 'Product Category',
            handler: 'productCategory'
        },
        {
            type: 'number',
            id: 4,
            placeholder: 'Quantity of goods',
            handler: 'quantityOfGoods'
        },
        {
            type: 'number',
            id: 5,
            placeholder: 'Weight/Volume of one item',
            handler: 'weightOfItem'
        },
    ]

    const changeHandler = event => {
        const key = event.target.getAttribute('handler')
        setForm({
            ...form,
            [key]: event.target.value
        })
        console.log('====>form<====', form)
    }


    return (
        <div className="container">
            <TitleHeader
                title={"Sales statistics"}
                subtitle={"Welcome to CRM dashboard"}
                onClick={() => setOpen(true)}
            />
            <div className="tables">
                <div className="tables-left">
                    <div className="one">
                        1
                    </div>
                    <div className="two">
                        2
                    </div>
                </div>
                <div className="tables-right">
                    <div className="three">
                        3
                    </div>
                </div>
            </div>

            {open && <Modal
                onClick={setOpen}
                title="Creating a product">
                {inputs.map((item) => {
                    return (
                        <div className="modal-input-wrap" key={item.id}>
                            <Input
                                placeholder={item.placeholder}
                                type={item.type}
                                handler={item.handler}
                                onChange={changeHandler}
                            />
                        </div>
                    )
                })}
                <div className="modal-button">
                    <Button onClick={() => console.log('====>AddProducts<====')}>
                        <span>Add products <img src={plus} alt='add'/></span>
                    </Button>
                </div>
            </Modal>
            }
        </div>
    )
};

export default Home;