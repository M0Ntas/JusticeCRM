export const inputsRender = [
  {
    type: 'text',
    id: Math.random().toString(36).substr(2, 9),
    placeholder: 'Store',
    handler: 'store'
  },
  {
    type: 'number',
    id: Math.random().toString(36).substr(2, 9),
    placeholder: 'Price',
    handler: 'price'
  },
  {
    type: 'text',
    id: Math.random().toString(36).substr(2, 9),
    placeholder: 'Product name',
    handler: 'productName'
  },
  {
    type: 'text',
    id: Math.random().toString(36).substr(2, 9),
    placeholder: 'Product Category',
    handler: 'productCategory'
  },
  {
    type: 'number',
    id: Math.random().toString(36).substr(2, 9),
    placeholder: 'Quantity of goods',
    handler: 'quantityOfGoods'
  },
  {
    type: 'number',
    id: Math.random().toString(36).substr(2, 9),
    placeholder: 'Weight/Volume of one item',
    handler: 'weightOfItem'
  },
]