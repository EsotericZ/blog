import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');

    return (
        <div className='add'>
            <div className='content'>
                <input type='text' placeholder='Title' />
                <div className="editContainer">
                    <ReactQuill theme='snow' value={value} onChange={setValue} />
                </div>
            </div>
            <div className='menu'>
                <div className='item'>
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display:'none'}} type='file' name='' id='file' />
                    <label htmlFor='file'>Upload Image</label>
                    <div className='buttons'>
                        <button>Save Draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className='item'>
                    <h1>Category</h1>
                    <input type='radio' name='cat' value='monarch' id='monarch' />
                    <label htmlFor='monarch'>Monarch</label>
                    <input type='radio' name='cat' value='games' id='games' />
                    <label htmlFor='games'>Games</label>
                    <input type='radio' name='cat' value='rball' id='rball' />
                    <label htmlFor='rball'>Rball</label>
                    <input type='radio' name='cat' value='sports' id='sports' />
                    <label htmlFor='sports'>Sports</label>
                    <input type='radio' name='cat' value='life' id='life' />
                    <label htmlFor='life'>Life</label>
                    <input type='radio' name='cat' value='random' id='random' />
                    <label htmlFor='random'>Random</label>
                </div>
            </div>
        </div>
    )
}

export default Write;