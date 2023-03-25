import React, { memo, useEffect, useState } from 'react';
import './index.css';
import Header from '../header';
import { getStarWarsPeople } from '../../fetch';
import Cards from './Cards';
import Loading from '../../helpers/Loading';

const Characters = memo(() => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [selectData, setSelectData] = useState(['']);
  const [optionValue, setOptionValue] = useState('gender');
  const [optionValueTwo, setOptionValueTwo] = useState('All');

  useEffect(() => {
    getStarWarsPeople()
      .then((people) => {
        setData(people.map((p) => p));
        setNewData(people.map((p) => p));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const select = Array.from(
      new Set(data?.map((el) => Object.entries(el).find((x) => x[0] === `${optionValue}` && x)[1])),
    );
    optionValue === 'gender'
      ? setSelectData(['All', 'male', 'n/a', 'female', 'hermaphrodite', 'none'])
      : setSelectData(['All', ...select]);
  }, [optionValue]);
  /*фильтрация по данным из выпадающих списков*/
  const filterData =
    optionValueTwo !== 'All' ? data.filter((el) => el[optionValue].includes(optionValueTwo)) : data;

  useEffect(() => {
    if (optionValueTwo === 'male') {
      setNewData(filterData.filter((x) => !x[optionValue].includes('female')));
    } else setNewData(filterData);
  }, [optionValueTwo]);

  return (
    <>
      <Header />
      {data.length < 1 ? (
        <Loading />
      ) : (
        <div className={'characters'}>
          <div className={'characters-block'}>
            <span className={'characters-title'}>
              <span className={'characters-title-weight'}>{data?.length} Peoples</span> for you to
              choose your favorite
            </span>
            <div className={'filters'}>
              <select className={'select'} onChange={(e) => setOptionValue(e.target.value)}>
                <option value={'gender'}>gender</option>
                <option value={'eye_color'}>year color</option>
                <option value={'hair_color'}>hair color</option>
                <option value={'skin_color'}>skin color</option>
              </select>
              <select className={'select'} onChange={(e) => setOptionValueTwo(e.target.value)}>
                {selectData?.map((el, index) => {
                  return (
                    <option value={el} key={index}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>
            <Cards newData={newData} />
          </div>
        </div>
      )}
    </>
  );
});

export default Characters;
