import React, {useState} from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const MyProducts = () => {

    const [form, setForm] = useState({
        numberOfProducts: '',
        dateOfSale: '',
    })

    const [open, setOpen] = useState(false)

    const inputs = [
        {
            type: 'number',
            id: 0,
            placeholder: 'Number of products',
            handler: 'numberOfProducts'
        },
        {
            type: 'date',
            id: 1,
            placeholder: 'Date of sale',
            handler: 'dateOfSale'
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
                title={"My product"}
                subtitle={"Product table"}
                onClick={() => setOpen(true)}
            />

            {open && <Modal
                onClick={setOpen}
                title="Sell the product">
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
                    <Button onClick={() => console.log('====>SellProduct<====')}>
                        <span>Sell product</span>
                    </Button>
                </div>
            </Modal>
            }
        </div>

    )
};

export default MyProducts;