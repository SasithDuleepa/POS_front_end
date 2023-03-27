import React, { useState } from 'react';
import './addNew.css'





export default function AddNew() {
  const[groceryItems, setGroceryItems]= useState([]);

  const[itemName,setItemName]= useState('');
  const[itemQuantity,setItemQuantity]= useState('0');
  const[itemPrice,setItemPrice]= useState('0');

  const [totalBillAmount, setTotalBillAmount] = useState(0);

  const handleItemNameChange= (event)=>{
      setItemName(event.target.value);
  };
  const handleItemQuantityChange= (event)=>{
      setItemQuantity(event.target.value);
  };
  const handleItemPriceChange= (event)=>{
      setItemPrice(event.target.value);
  };

  const handleAddItems=()=>{
      const newItem = {
          name:itemName,
          quantity:itemQuantity,
          price:itemPrice
      };
      setGroceryItems([...groceryItems, newItem]);
      setItemName('');
      setItemQuantity(0);
      setItemPrice(0);
      setTotalBillAmount(totalBillAmount+ itemQuantity*itemPrice);
      
    };

    const handleedit=(index)=>{
      const itemToedit = groceryItems[index];
      console.log(itemToedit);
      setItemName(itemToedit.name);
      setItemQuantity(itemToedit.quantity);
      setItemPrice(itemToedit.price);
      const remainingItems = groceryItems.filter((item,i)=> i !== index);
      setGroceryItems(remainingItems);
      setTotalBillAmount(totalBillAmount - itemToedit.quantity*itemToedit.price);


    };
    const handledelete= (index)=>{
      const itemtoDelete = groceryItems[index];
      const remainingItems = groceryItems.filter((item, i)=> i !== index);
      setGroceryItems(remainingItems);
      setTotalBillAmount(totalBillAmount - itemtoDelete.quantity*itemtoDelete.price);

    }

  return (
    <div id="frame">
            
            <p id="head">billing</p>
            <div className="summery">            
               <p className="summerydata">bill No.:</p>
               <p className="summerydata">date :</p>
               <p className="summerydata">user :</p>
            </div>
            
            {/* <div id="input">
            <label>item name :</label>
            <input type="text" value={itemName} onChange={handleItemNameChange}/>
            <label>item quantity</label>
            <input type="number" value={itemQuantity} onChange={handleItemQuantityChange}/>
            <label>item price</label>
            <input type="number" value={itemPrice} onChange={handleItemPriceChange}/>
            <button id="add" onClick={handleAddItems}>add</button>
            </div> */}
            <div className='table_frame' style={{  }}> 
            <table  bordered={false} >
                <thead >
                    <tr>
                        <th className="th_name" >item name</th>
                        <th className="th">Quantity</th>
                        <th className="th">unit price</th>
                        <th className="th">total price</th>
                        <th className="th">action</th>
                    </tr>
                </thead>
                
                <tbody > 
                    {groceryItems.map((item, index)=>(
                        <tr key={index}>
                            <td className="td">{item.name}</td>
                            <td className="td">{item.quantity}</td>
                            <td className="td">{item.price}</td>
                            <td className="td">{item.quantity*item.price}</td>
                            <td>
                                <button onClick={()=>handleedit(index)}>edit</button>
                                <button onClick={()=>handledelete(index)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                
            </table>
            
            
            <div className="input">
            
            <input className='item_input' type="text" value={itemName} onChange={handleItemNameChange}/>
            
            <input className='qtn_input' type="number" value={itemQuantity} onChange={handleItemQuantityChange}/>
            
            <input className='unitprice_input' type="number" value={itemPrice} onChange={handleItemPriceChange}/>
            <button className="add" onClick={handleAddItems}>add</button>
            </div>
            </div>

            <div id="footer">
            <h2 className="summerydata">Total Bill Amount: {totalBillAmount}</h2>
            <button className='submit_bill'>submit</button>
            </div>

        </div>
  )
}