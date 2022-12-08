import React from 'react'
import { useState } from 'react'
import './Tableform.css'
function TableForm() {
  const [inputarr, setInputarr] = useState([])
  const [inputdata, SetInputdata] = useState({
    name: "",
    rollNo: ""
  })
  function changehandle(e) {
    SetInputdata({ ...inputdata, [e.target.name]: e.target.value })

  }
  let { name, rollNo } = inputdata;
  function changhandle() {
    setInputarr([...inputarr, { name, rollNo }])
    console.log(inputdata, "input data what we enter")
    SetInputdata({ name: "", rollNo: "" })
  }
  return (
    <div className='flexbox'>
      <div className='con'>
        <div>
          <form className='form2'>
            <div className='hero'>
              <div className='row'>
                <div class="col-75">
                  <label>Xidmət edəcək şəxsi seçin</label>
                  <select type="text" autoComplete='off' name="name" value={inputdata.name} onChange={changehandle}>
                    <option></option>
                    <option>Ferid</option>
                    <option>Mehemmed</option>
                    <option>Zehra</option>
                    <option>Aynur</option>
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='col-75'>
                  <label>Masa seçin</label>
                  <select type="text" autoComplete='off' name="rollNo" value={inputdata.rollNo} onChange={changehandle}>
                    <option></option>
                    <option>M1</option>
                    <option>M2</option>
                    <option>M3</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-success" onClick={changhandle}>Elave et</button>
          </form>
        </div>
      </div>
      <table className='table table-bordered bg-light'>
        <thead className="bg-info">
          <tr>
            <td>Ad</td>
            <td>Masa</td>
          </tr>
        </thead>
        <tbody>
          {
            inputarr.map(
              (info, ind) => {
                return (
                  <tr key={ind}>
                    <td>{info.name}</td>
                    <td>{info.rollNo}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableForm

