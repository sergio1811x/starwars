import React, { memo, useEffect, useState } from 'react';
import './index.css';
import Header from '../header';
import { getStarWarsPeople } from '../../fetch';
import Cards from './Cards';
import Loading from '../../assets/Loading';

const Characters = memo(() => {
  const [data, setData] = useState([]);
  const [selectData, setSelectData] = useState(['']);
  const [optionValue, setOptionValue] = useState('gender');

  useEffect(() => {
    getStarWarsPeople()
      .then((people) => {
        setData(people.map((p) => p));
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

  console.log(data);

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
              <select className={'select'}>
                {selectData?.map((el, index) => {
                  return (
                    <option value={index} key={index}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>
            <Cards data={data} />
          </div>
        </div>
      )}
    </>
  );
});

export default Characters;
