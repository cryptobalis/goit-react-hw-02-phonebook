import css from './Filter.module.css';
const Filter = ({ filter, handleChangeFilter }) => {
    return (
        <div className={css['filter__conteiner']}>
            <h2 className={css['input__title']}>Find contacts by name</h2>
            <input className={css.input}
                type="text"
                placeholder='Seach...'
                value={filter}
                onChange={ handleChangeFilter } />  
        </div>
    )
}
export default Filter;