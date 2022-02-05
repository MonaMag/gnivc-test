import React from 'react'
import s from './FormContainer.module.css'


function FormContainer() {
    console.log("FORM")
    return (
        <div className={s.container}>
            <div className={s.formBlock}>
                <div className={s.form}>
                    <div className={s.formText}>
                        <span>Введите слово:  </span>
                    </div>
                    <div className={s.formInput}>
                        <input type="text"/>
                    </div>
                    <div className={s.formSelect}>
                        <label htmlFor="case">Выберите падеж: </label>
                        <select name="case" id="case">
                            <option value="nominative">Именительный</option>
                            <option value="genitive">Родительный</option>
                            <option value="dative">Дательный</option>
                            <option value="accusative">Винительный</option>
                            <option value="instrumental">Творительный</option>
                            <option value="prepositional">Предложный</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FormContainer
