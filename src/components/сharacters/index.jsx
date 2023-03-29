import React, { memo, useEffect, useState } from 'react';
import './index.css';
import Header from '../header';
import Cards from './Cards';
import Loading from '../../helpers/Loading';
import axios from 'axios';

const Characters = memo(() => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [selectData, setSelectData] = useState(['All', 'male', 'female']);
  const [optionValue, setOptionValue] = useState('gender');
  const [optionValueTwo, setOptionValueTwo] = useState('All');

  useEffect(() => {
    axios
      .get('https://akabab.github.io/starwars-api/api/all.json')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

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
          <div className={'characters__block'}>
            <span className={'characters__title'}>
              <span className={'characters__title_weight'}>{data?.length} Peoples</span> for you to
              choose your favorite
            </span>
            <div className={'filters'}>
              <select className={'select'} onChange={(e) => setOptionValue(e.target.value)}>
                <option value={'gender'}>gender</option>
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
            <Cards newData={newData.length < 1 ? data : newData} />
          </div>
        </div>
      )}
    </>
  );
});

export default Characters;
